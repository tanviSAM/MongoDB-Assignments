const express = require("express");
const user = require("../models/user.models");
var jwt = require('jsonwebtoken');

require('dotenv').config();

// const { body, validationResult } = require('express-validator');
// const router = express.Router();

const generateToken = (User) => {
    return jwt.sign({User},process.env.SECRET_KEY)
}

const register = async(req, res) => {
    try{
         let User = await User.findone({email : req.body.email})
         if(User){
              return res.send ({message : "Email already exist"})
         }
         user = await User.create(req.body);
         var token = generateToken(User);
         return res.send ({user,token});
    }
    catch(err){
         res.send({message: err.message});
    }
}

const login = async(req, res) => {
    try{
         let User = await User.findone({email : req.body.email})
         if(!User){
              return res.send ({message : "Wrong Email or Password"})
         }
         const match = User.checkpassword(req.body.password);
         if(!match){
              return res.send ({message : "Wrong Email or Password"})
         }
         const token = generateToken(User);
         return res.send({User,token});
    }
    catch(err){
         res.send({message: err.message});
    }
}

module.exports = {register, login};



