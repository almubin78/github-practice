const successResponse=(res,{message,payload})=>{
    message=message || "You have successfully completed the request from success controller"
    payload=payload || null
    
    res.status(200).json({
        status:"success",
        message:message,
        payload:payload
    })

}
const successResponseWithToken=(res,{message,payload,token})=>{ 
    res.status(200).json({
        status:"success",
        message:message,
        payload:payload,
        token:token
    })
}

module.exports={
    successResponse,
    successResponseWithToken
}