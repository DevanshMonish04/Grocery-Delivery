import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma.js";

interface CustomJwtPayload {
  id: string;
  role: string;
}

const deliveryAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as CustomJwtPayload;

    if (decoded.role !== "delivery") {
      return res.status(403).json({
        message: "Access denied. Delivery partner only.",
      });
    }

    const partner = await prisma.deliveryPartner.findUnique({
      where: {
        id: decoded.id,
      },
    });

    if (!partner || !partner.isActive) {
      return res.status(403).json({
        message: "Account is deactivated",
      });
    }

    req.partner = partner;

    next();
  } catch (error: any) {
    console.log(error);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token expired",
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default deliveryAuth;