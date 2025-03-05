const {aeroplaneService}=require("./../services");//here aeroplaneService is an js-obj
const {errResObj, succResObj}=require("./../utils")
const {StatusCodes}=require("http-status-codes")

async function createAeroplane(req, res){
    try{
        const aeroplane=await aeroplaneService.createAeroplane({
            name:req.body.name,
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
        succResObj.data=aeroplane;
        return res.status(StatusCodes.CREATED).json(succResObj);
    }catch(err){
        errResObj.errProp=err;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errResObj);
    }
}

module.exports={
    createAeroplane
}