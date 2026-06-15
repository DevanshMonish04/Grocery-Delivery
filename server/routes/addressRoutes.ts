import express from "express"
import auth from "../middleware/auth.js"
import { addAddress, deleteAddress, getAddresses, updateAddress } from "../controllers/addressController.js"

const addressRoute=express.Router()

addressRoute.get('/',auth,getAddresses)
addressRoute.post('/',auth,addAddress)
addressRoute.put('/:id',auth,updateAddress)
addressRoute.delete('/:id',auth,deleteAddress)

export default addressRoute