const mongoose=require("mongoose");

let courseSchema=new mongoose.Schema({
    Course_Name:{
        type:String,
        required:true,
        unique:true
    },
    Description:{
        type:String,
        required:true,
        unique:true,
    },
    Credit:{
        type:Number,
        required:true,
        
    },
    Duration:{
        type:Number,
        required:true,

    },
   
},{timestamps:true});

module.exports =new mongoose.model("Course",courseSchema);
