const express = require('express');
const router = express.Router();
const User=require('../schema/user');
let a=new User({
    name:111,
    password:222
});
a.save(function (err) {
    if(err) throw err;
    console.log('user saved')
});
router.post('/reg',function(req,res){
    // var req=req.body;
    // var obj={name:req.name,pwd:req.pwd}
    var obj={name:'admin2'}
    // console.log( userModel.insertMany({name:req.name,pwd:req.pwd}));
    User.find(obj)

        .then((resolve)=>{
            console.log(resolve)
            console.log(typeof (resolve[0]));
            console.log(resolve[0]._id)
            console.log(resolve[0].password)
            console.log(resolve[0].name)
            debugger;
            if(resolve.length){
                res.send({err:0,msg:'用户名已存在',username:resolve[0].name})
                console.log({err:0,msg:'用户名已存在',username:resolve[0].name})
            }else{
                User.insertMany(obj,(err,ress)=>{
                    res.send({err:1,msg:'注册成功',res:ress})
                })
            }
        })
        .catch((reject)=>{console.log(reject)})

});
module.exports = router;