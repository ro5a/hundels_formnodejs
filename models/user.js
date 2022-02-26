const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const user_schema=new Schema({
   id:{type:String,
   required:true
    },
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
     },
     image:{type:String,
            required:true}
 }
);
const users=mongoose.model("users",user_schema);
module.exports=users;