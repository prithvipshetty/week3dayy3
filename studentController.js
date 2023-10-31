const StudentModel=require("../Models/studentModel");
const Validator=require("./Validation.js");
let jwt = require("jsonwebtoken")
// register student

let createStudent=async(req,res)=>{
    try{
let data=req.body;
if(!Validator.isValidBody(data)){
    return res.status(404).send({msg:"no data provided"});
}


let{Student_Name,Email,Usn,Gender,Mobile,Password}=data;

// Student_Name Validation

if(!Validator.isValid(Student_Name)){
    return res.status(400).send({status:false,msg:"student name is required"});

}
if(!Validator.isValidName.test(Student_Name)){
return res.status(400).send({status:false,msg:"invalid name"});
}


// email validation

if(!Validator.isValid(Email)){
    return res.status(400).send({msg:"email  is required"});
    
}

let sameEmail=await StudentModel.findOne({Email});
if(sameEmail){
    return res.status(400).send({msg:"This email already exists"});
}
if(!Validator.isValidEmail.test(Email)){
    return res.status(400).send({msg:"invalid email"});
    }
// usn validation
if(!Validator.isValid(Usn)){
    return res.status(400).send({msg:"usn  is required"});
    
}
let sameUsn=await StudentModel.findOne({Usn});
if(sameUsn){
    return res.status(400).send({msg:"This usn already exists"});
}
// gender validation
if(!Validator.isValid(Gender)){
    return res.status(400).send({msg:"gender  is required"});
    
}
// mobile validation
if(!Validator.isValid(Mobile)){
    return res.status(400).send({msg:"mobile  is required"});
    
}
let sameMobile=await StudentModel.findOne({Mobile});
if(sameMobile){
    return res.status(400).send({msg:"This mobile no already exists"});
}
if(!Validator.isValidMobile.test(Mobile)){
    return res.status(400).send({msg:"invalid mobile"});
    }
// pass word validation
if(!Validator.isValid(Password)){
    return res.status(400).send({msg:"password  is required"});
    
}

let register=await StudentModel.create(data);
return res.status(201).send({
    status:true,
     msg:"Student Registered Successfully",
     data:register,
});
    }catch(error){
return res
.status(500)
.send({status:false,msg:"Internal Server Error"});
    }
};


// login student
let loginStudent=async(req,res)=>{
    try{
        let data=req.body;
        if(!Validator.isValidBody(data)){
        return res.status(404).send({status: false,msg:"no data provided"});
    }

let {Email,Password}=data;
        if(!Validator.isValid(Email)){
return res.status(400).send({msg:"pls enter your email"});
        }
        if(!Validator.isValid(Password)){
            return res.status(400).send({msg:"pls enter your password"});
        }

        let matchStudent=await StudentModel.findOne({Email,Password});
        if(!matchStudent){
            return res.status(200).send({msg:"student not registered"});
        }else{
            const token=jwt.sign({
                studentId:matchStudent._id.toString(),
            },"MERN STACK",{
                expiresIn:"20000sec",
            }
            );
            return res.status(200).send({msg:"student logged in successfully",token});
        }
    }catch(error){
return res.status(500).send({status:false,msg:"internal server error"});

    }
};


module.exports={createStudent,loginStudent};