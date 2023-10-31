const mongoose=require("mongoose");

let studentSchema=new mongoose.Schema({
    Student_Name:{
        type:String,
        required:true,

    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Usn:{
        type:String,
        required:true,
        unique:true,

    },
    Gender:{
        type:String,
        required:true,

    },
    Mobile:{
        type:Number,
        required:true,
        unique:true,
    },
    Password:{
        type:String,
        required:true,
        
    },
},{timestamps:true});

module.exports =new mongoose.model("Student",studentSchema);
