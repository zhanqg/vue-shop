const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/shop',{useNewUrlParser:true});
const db=mongoose.connection;
db.on('error',(err)=>{
    console.log('数据库连接失败');
});
db.on('open',function(){
    console.log('数据库连接成功');
});
db.on('disconnected',function(){
    console.log('数据库连接断开');
});
//var mongoose = require('mongoose');

// var Schema = mongoose.Schema;
//
// var userSchema = new Schema({
//     name: String,
//     password: String
// });
// var User = mongoose.model('user', userSchema);
// var a = new User({
//     name:"admin2",
//     password:"admin2"
// });
//
// a.save(function (err) {
//     if(err) throw err;
//     console.log('user saved')
// });
module.exports=db;