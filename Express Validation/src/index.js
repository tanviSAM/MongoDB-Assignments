const express=require("express");
const userscontorller=require("./controllers/user.controllers");

const app=express();

app.use(express.json());
app.use("/user",userscontorller);

module.exports=app;