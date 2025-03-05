
const {infoController}=require("./../../controllers");
const aeroplaneRoute=require("./aeroplane-route");

const express=require("express");
const router=express.Router();

router.use("/aeroplanes", aeroplaneRoute);
router.get("/info", infoController.info);

module.exports=router;