const{logger}=require("./../config")

class CrudRepository{

    constructor(model){
        if(!model) throw new Error("model is required")
        this.model=model;
    }

    async create(data){
        try{
            const response=await this.model.create(data);
            return response;
        }catch(err){
            logger.error("error in CrudRepository:create",{err});
            throw err;
        }
    }

    async getAll(filter={}){
        try{
            const response=await this.model.find(filter);
            return response;
        }catch(err){
            logger.error("error in CrudRepository:getAll",err);
            throw err;
        }
    }

    async update(id, data){
        try{
            const response=await this.model.findByIdAndUpdate(id, data, {new:true});
            return response;
        }catch(err){
            logger.error("error in CrudRepository:update", err);
            throw err;
        }
    }

    async delete(id){
        try{
            const response=await this.model.findByIdAndDelete(id);
            return response;
        }catch(err){
            logger.error("error in CrudRepository:delete", err);
            throw err;
        }
    }
}

module.exports=CrudRepository