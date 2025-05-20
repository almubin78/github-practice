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
const errorResponse=(res,{message,payload})=>{
    message=message || "You have got the message from error controller"
    payload=payload || null
    
    res.status(200).json({
        status:"error",
        message:message,
        payload:payload
    })

}

module.exports={
    successResponse,
    successResponseWithToken,
    errorResponse
}