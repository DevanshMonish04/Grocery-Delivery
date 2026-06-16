import express from "express"
import { cancleDelivery, completeDelivery, getMyDeliveries, getMyDeliveryDetails, loginPartner, updateDeliveryStatus, updateLocation } from "../controllers/deliveryPartnerController.js";
import deliveryAuth from "../middleware/deliveryAuth.js";

const deliveryPartnerRouter=express.Router();

deliveryPartnerRouter.post('/login',loginPartner)
deliveryPartnerRouter.get('/my-deliveries',deliveryAuth, getMyDeliveries)
deliveryPartnerRouter.get('/my-deliveries/:id',deliveryAuth, getMyDeliveryDetails)
deliveryPartnerRouter.put('/my-deliveries/:id/complete',deliveryAuth, completeDelivery)
deliveryPartnerRouter.put('/my-deliveries/:id/cancel', deliveryAuth, cancleDelivery)
deliveryPartnerRouter.put('/my-deliveries/:id/status',deliveryAuth, updateDeliveryStatus)
deliveryPartnerRouter.put('/my-deliveries/:id/location',deliveryAuth, updateLocation)

export default deliveryPartnerRouter