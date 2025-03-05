const info=(req, res)=>{
    return res.status(200).json({
        success:true,
        message:"API is alive",
        error:{},
        data:{}
    })
}


module.exports={
    info
}