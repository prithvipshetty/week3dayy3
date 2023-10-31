const CourseModel=require("../Models/courseModel");
const Validator=require("./Validation.js");
let jwt = require("jsonwebtoken")
let createCourse=async(req,res)=>{
    try{
let data=req.body;
if(!Validator.isValidBody(data)){
    return res.status(404).send({msg:"no data provided"});
}
let{Course_Name,Description,Credit,Duration}=data;

// Course_Name Validation

if(!Validator.isValid(Course_Name)){
    return res.status(400).send({status:false,msg:"course name is required"});

}
let sameCourse_Name=await CourseModel.findOne({Course_Name});
if(sameCourse_Name){
    return res.status(400).send({msg:"This course name already exists"});
}
if(!Validator.isValidName.test(Course_Name)){
return res.status(400).send({status:false,msg:"invalid name"});
}
// description validation

if(!Validator.isValid(Description)){
    return res.status(400).send({msg:"description is required"});
    
}

let sameDescription=await CourseModel.findOne({Description});
if(sameDescription){
    return res.status(400).send({msg:"This description already exists"});
    
}
// if(!Validator.isValidEmail.test(Email)){
//     return res.status(400).send({msg:"invalid email"});
//     }

// credit validation
if(!Validator.isValid(Credit)){
    return res.status(400).send({msg:"credit  is required"});
    
}
// if(!Validator.isValidCredit.test(Credit)){
//     return res.status(400).send({status:false,msg:"invalid credit"});
//     }
// let sameUsn=await StudentModel.findOne({Usn});
// if(sameUsn){
//     return res.status(400).send({msg:"This usn already exists"});
// }
// duration validation
if(!Validator.isValid(Duration)){
    return res.status(400).send({msg:"duration  is required"});
    
}
// if(!Validator.isValidDuration.test(Duration)){
//     return res.status(400).send({status:false,msg:"invalid duration"});
//     }

// let sameMobile=await StudentModel.findOne({Mobile});
// if(sameMobile){
//     return res.status(400).send({msg:"This mobile no already exists"});
// }
// if(!Validator.isValidMobile.test(Mobile)){
//     return res.status(400).send({msg:"invalid mobile"});
//     }
// // pass word validation
// if(!Validator.isValid(Password)){
//     return res.status(400).send({msg:"password  is required"});
    
// }

let register=await CourseModel.create(data);
return res.status(201).send({
    status:true,
     msg:"Course Registered Successfully",
     data:register,
});
    }catch(error){
return res
.status(500)
.send({status:false,msg:"Internal Server Error"});
    }
};
// login student
// let loginStudent=async(req,res)=>{
//     try{
//         let data=req.body;
//         if(!Validator.isValidBody(data)){
//         return res.status(404).send({status: false,msg:"no data provided"});
//     }

// let {Email,Password}=data;
//         if(!Validator.isValid(Email)){
// return res.status(400).send({msg:"pls enter your email"});
//         }
//         if(!Validator.isValid(Password)){
//             return res.status(400).send({msg:"pls enter your password"});
//         }

//         let matchStudent=await StudentModel.findOne({Email,Password});
//         if(!matchStudent){
//             return res.status(200).send({msg:"student not registered"});
//         }else{
//             const token=jwt.sign({
//                 studentId:matchStudent._id.toString(),
//             },"MERN STACK",{
//                 expiresIn:"20000sec",
//             }
//             );
//             return res.status(200).send({msg:"student logged in successfully",token});
//         }
//     }catch(error){
// return res.status(500).send({status:false,msg:"internal server error"});

//     }
// };


module.exports={createCourse};
