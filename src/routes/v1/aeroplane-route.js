const router=require("express").Router();
const{aeroplaneController}=require("../../controllers")
const {aeroplaneMiddleware}=require("../../middlewares");

// /api/v1/airplanes
router.post("/",aeroplaneMiddleware.validateCreateRequest, aeroplaneController.createAeroplane)

module.exports=router;