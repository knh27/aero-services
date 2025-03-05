const { createLogger, format, transports } = require("winston")//createLogger is a function and rest two are objects

const { combine, timestamp, printf } = format;//destructured format

const customFormat = printf(({ level, message, timestamp }) => { //creating custom format
    return `${timestamp}: ${level}: ${message}`
})

const logger = createLogger({
    format: combine(
        timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
        customFormat, //custom format,
    ),
    transports: [ //we want our logs to be printed in console and also in a file as well
        new transports.Console(),
        new transports.File({filename: "combined.log"})
    ]

})

module.exports=logger