const mongoose=require("mongoose");

const aeroplaneSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name is required field"]
    },
    modelNumber:{
        type:String,
        required:[true, "model number is required"]

    },
    capacity:{
        type:Number,
        required:[true, "capacity is required"]
    }

})

const Aeroplane=mongoose.model("Aeroplane", aeroplaneSchema);

module.exports=Aeroplane;