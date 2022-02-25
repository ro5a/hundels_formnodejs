const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const user_schema=new Schema({
     name:{type:String,
           required:true,
           unique:true
    },
     username:{type:String,
        required:true,
        unique:true},
     email:{
        type:String,
        required:true,
        unique:true
     }
 }
);
const users=mongoose.model("users",user_schema);
module.exports=users;