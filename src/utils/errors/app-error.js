class AppErrClass extends Error{
    constructor(errMessage, statusCode){
        super(errMessage.join(", "))
        this.statusCode=statusCode;
        this.errMessage=errMessage;
    }
}

module.exports=AppErrClass;