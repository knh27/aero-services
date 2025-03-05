const { AeroplaneRepository } = require("../repositories");
const { logger } = require("../config")
const AppErrClass = require("../utils");
const { StatusCodes } = require("http-status-codes")

const aeroplaneRepository = new AeroplaneRepository();

async function createAeroplane(data) {
    try {
        return await aeroplaneRepository.create(data);
    } catch (err) {
        //Mongoose sets err.errors as an object (with keys as field names), not an array. Calling forEach directly on it may fail.Iterate over Object.values(err.errors
        console.log("error in services", err);
        if (err.name === "ValidationError") {
            let mess_arr=[];
            Object.values(err.errors).forEach(er=>{
                mess_arr.push(er.message);
            })
            throw new AppErrClass(mess_arr, StatusCodes.BAD_REQUEST)
        }

        logger.error("error in services:createAeroplane", { err });
        throw err;
    }
}


module.exports = {
    createAeroplane
}