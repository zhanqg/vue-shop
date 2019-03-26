let mongoose=require('mongoose');
let UserSchema=new mongoose.Schema({
    name:String,
    password:String,

})
module.exports=mongoose.model('user',UserSchema)