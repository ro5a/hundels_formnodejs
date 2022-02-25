const express=require("express");
const mongoose=require("mongoose");
const { getMaxListeners } = require("./models/user");
const User=require('./models/user');
const app=express();

app.set('view engine',"ejs");
app.use(express.urlencoded());
 mongoose.connect("mongodb://localhost:27017/hundle-form")
.then((result)=>{
    const s= new User({
        name:" Roaa tareq",
        username:"Roaa",
        email:"roor3hakimi@gmail.com"
    });
    s.save();
    console.log(result);
})
.catch((error)=>{
console.log(error);
});

app.get('/home',auth,(req,res)=>{
    res.render('home'); 
});
app.post('/add_user',auth,(req,res)=>{
console.log(req.body);
res.end();
});
function auth(req,res,next){
    next();
}
app.listen("3000");