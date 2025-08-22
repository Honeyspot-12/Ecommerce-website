const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:[3, 'Username must be at least 3 characters long']
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:[10, 'Username must be at least 10 characters long']
    },
    password:{
        type:String,
        required:true,
        minlength:[5, 'Password must be at least 5 characters long'],
        trim:true
    },
    phone:{
        type:String,
        required:true,
        minlength:[10,'Phone number must be at least 10 digits long'],
        trim :true
    }

}) 

const user=mongoose.model('user',userSchema);
module.exports=user;
    