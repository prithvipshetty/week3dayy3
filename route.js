// const express=require("express");
// const router=express.Router()



// const StudentController=require("../Controllers/studentController")

// router.post("/register",StudentController.createStudent);
// router.post("/login",StudentController.loginStudent);

// module.exports=router;
const express=require("express");
const router=express.Router()



const CourseController=require("../Controllers/courseController")

router.post("/register",CourseController.createCourse);
//router.post("/login",StudentController.loginStudent);

module.exports=router;
