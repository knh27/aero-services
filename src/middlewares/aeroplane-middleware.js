const{errResObj}=require("../utils");
const{StatusCodes}=require("http-status-codes")
const {AppErrClass}=require("../utils");

function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber || !req.body.name){
        errResObj.errProp=new AppErrClass(["model-number or name not found"], StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(errResObj);
    }

    next();
}

module.exports={
    validateCreateRequest
}