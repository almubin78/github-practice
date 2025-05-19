console.log('user router is here');
const getAllUser = (req,res)=>{
    res.json({
        name:"Mubin",
        age:34
    })
}
module.exports = {
    getAllUser
}