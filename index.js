const express=require("express");
const mongoose=require("mongoose");
const { getMaxListeners } = require("./models/user");
const User=require('./models/user');
const app=express();

app.set('view engine',"ejs");
app.use(express.urlencoded());
 mongoose.connect("mongodb://localhost:27017/hundle-form")
.then((result)=>{
    
    console.log(result);
})
.catch((error)=>{
console.log(error);
});

app.get('/home',auth,(req,res)=>{
    res.render('home'); 
});
app.post('/add_user',auth,(req,res)=>{
    const s= new User({
        id:mongoose.Types.ObjectId,
        name:req.body.username,
        username:req.body.name,
        email:req.body.email
    });
    s.save();
console.log(req.body);
res.end();
});
function auth(req,res,next){
    next();
}
app.listen("3000");