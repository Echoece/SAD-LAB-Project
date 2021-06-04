const mongoose = require('mongoose');

// user - name , email, password, address, gender, DOB

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter your name']
    },
    email:{
        type:String,
        required: [true, 'Please enter your email'],
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required:[true, 'Please provide a password'],
        minlength: 4
    },
    address:{
        type: String
    },
    gender:{
        type: String,
        enum:['Male','Female'],
        default:''
    }
})

const user = mongoose.model('User',userSchema);
module.exports = user;