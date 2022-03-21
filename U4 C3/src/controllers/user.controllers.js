const express = require("express");
const {body, validationResult} = require("express-validator");
const User = require("../models/user.models.js");
const router= express.Router;

router.post(
    "/",
    body("firstName")
        .trim()
        .not()
        .isEmpty()
        .bail()
        .withMessage("Please fill in First Name")
        .isLength( {min: 3})
        .withMessage("First Name must have minimum 3 letters"),
    body("lastname").custom((value)=>{
        if(value && value.length<3){
            throw new Error("Last Nmae must be atleast 3 characters")
        }
        return true;
    }),
    body("email")
        .isEmail()
        .custom(async (value) =>{
            const user = await User.findOne({email: value});
            if(user){
                throw new Error("Email already registered");
            }
            return true;
        }),
    body("age")
        .not()
        .isEmpty()
        .withMessage("Please fill in your age")
        .isNumeric()
        .withMessage("Age must be above 16")
        .custom((val)=>{
            if(val<15 || val>120){
                throw new Error("Incorrect age Provided")
            }
            return true;
        }),
    body("password")
        .not()
        .isEmpty()
        .withMessage("Enter Password")
        .custom((value)=>{
            const passw = /^(?=.*d)(?=.*[a-z])(?=.*[^a-aA-Z0-9])(?=.*\s).{7,15}$/;
            if(!value.match(passw)){
                throw new Error("Password must be Strong");
            }
            return true;
        })
        .custom((value,{req}) =>{
            if(value !== req.body.confirmPassword){
                throw new Error("Does not match")
            }
            return true;
        }),
    async function (req,res){
        try{
            console.log(body("firstName"));
            const errors = validationResult(req);
            console.log({ errors });
            if(!erroes.isEmpty()){
                return res.status(400).send({ errors: errors.array() });
            }
            const user= await User.create(res.body);
            return res.status(201).send(user);

            } catch(err){
                return res.status(500).send({message: err.message});

        }
    }
);

module.exports = router;