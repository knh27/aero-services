// require("dotenv").config();
const {logger, serverConfig, connectDB}=require("./config")
const apiRoutes=require("./routes")


const express=require("express");

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", apiRoutes);
connectDB();






app.listen(serverConfig.PORT, ()=>{
    console.log("Server listening on port ",serverConfig.PORT)
    logger.info("successfully started server", {});
})