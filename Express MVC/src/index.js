const express=require("express");
const mongoose=require("mongoose");

const app=express();
app.use(express.json());

const userController=require("./controller/user.controller")
const submissionController=require("./controller/submission.controller")
const studentController=require("./controller/student.controller")
const evaluationController=require("./controller/eval.controller")
const batchController=require("./controller/batches.controller")


app.use("/user",userController)
app.use("/submission",submissionController)
app.use("/student",studentController)
app.use("/evaluation",evaluationController)
app.use("/batch",batchController)



module.exports=app;


