const express=require("express");
const multer=require('multer');
const mongoose=require("mongoose");

const User=require('./models/user');

const app=express();
const storage=multer.diskStorage({destination:(req,file,cb)=>{
    if(file.mimetype=="image/png"|| file.mimetype== "image/jpg")
    cb(null,'public/images');
    else if(file.mimetype=="application/pdf ")
    cb(null,"public/pdf/");
},filename:(req,file,cb)=>{
    var extension=file.originalname.split(".");
    var ext= extension[extension.length=1];
    var uploaded_file_name=file.fieldname+"-"+Date.now() + '-' + Math.round(Math.random() * 1E9)+"."+ext;
    cb(null, uploaded_file_name);
}});
const upload=multer({
    storage:storage,
    fileFilter:(req,file,callback)=>{
        if(file.mimetype=="image/png"|| file.mimetype== "image/jpg"|| file.mimetype=="application/pdf" ){
            callback(null,true)
        }
    },
    limits:1024*1024*5 
});
app.set('view engine',"ejs");
app.use(express.urlencoded());
 mongoose.connect("mongodb://localhost:27017/hundle-form")
.then((result)=>{
    
    // console.log(result);
})
.catch((error)=>{
console.log(error);
}); 

app.get('/',auth,(req,res)=>{
    res.render('home'); 
});
app.post('/add_user',upload.single('u_image') ,(req,res)=>{
    const u= new User({
        id:mongoose.Types.ObjectId,
        name:req.body.username, 
        username:req.body.name,
        email:req.body.email,
        image:req.file.filename
    });
    u.save((error,result)=>{
        if(error)
        console.log(error.message);
        else
        console.log(result);

         
    });
    console.log("data inserted successful");
    res.end();
 
// console.log(req.body);

});
function auth(req,res,next){
    next();
}
app.listen("3000");