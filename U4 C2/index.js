const express= require("express");
const mongoose= require("mongoose");

const app= express();
app.use(express.json());

const connect= () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/bankingSystem")
};

//----------------Schema----------------

//User Schema
const userSchema= mongoose.Schema({
    firstName:{type:String, required:true},
    middleName:{type:String, required:false},
    lastName:{type:String, required:true},
    age:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    address:{type:String, required:true},
    gender:{type:String, required:true},
    type:{type:String, required:false},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"Master"},
},
{
    timestamps:true,
});
const User= mongoose.model("user", userSchema);

//Branch Detail Schema
const branchSchema= new mongoose.Schema({
    name:{type:String, required:true},
    address:{type:String, required:true},
    IFSC:{type:String, required:true},
    MICR:{type:String, required:true},
},
{
    timestamps:true,
});


//Master Account
const masterAccountSchema= new mongoose.Schema({
    balance:{type:String, required:true},
},
{
    timestamps:true,
});
const Master= mongoose.model("MasterAccount", masterAccountSchema);

//Savings Account
const savingSchema= mongoose.Schema({
    account_number:{type:String, required:true, unique:true},
    balance:{type:String, required:true},
    interestRate:{type:String, required:true},
},
{
    timestamps:true,
});
const Saving= mongoose.model("SavingsAccount", savingSchema);

//Fixed Account
const fixedAccSchema= mongoose.Schema({
    account_number:{type:String, required:true, unique:true},
    balance:{type:String, required:true},
    interestRate:{type:String, required:true},
    startDate:{type:String, required:true},
    maturityDate:{type:String, required:true},
},
{
    timestamps:true,
});
const fixed= mongoose.model("FixedAccount", fixedAccSchema);

//Model
const Branch= mongoose.model("BranchDetail", branchSchema);

//-----------------Crud-----------------

// API [1]
app.get("/users", async(req,res) =>{
    try{
        const users= await Master.find().lean().exec();
        return res.status(200).send({users:users});
    }
    catch(error){
        return res.status(500).send({message:"Error! Please Try Again"});
    }
});

// API [2]
app.post("/SavingsAccount", async(req, res) =>{
    try{
        const user= await Saving.find().lean().exec();
        return res.status(201).send(user);
    }
    catch(error){
        return res.status(500).send({message:"Error! Please Try Again"});
    }
});

// API [3]
app.post("/FixedAccount", async(req,res) =>{
    try{
        const user= await fixed.create(req.body);
        return res.status(201).send(user);
    }
    catch(error){
        return res.status(500).send({message:"Error! Please Try Again"});
    }
});

// API [4]
app.get("/user:id", async(req, res) =>{
    try{
        const user= await Master.findById(req.params.id).lean().exec();
        return res.status(200).send(user);
    }
    catch(error){
        return res.status(500).send({message:"Error! Please Try Again"});
    }
});

//API[delete]
app.delete("/post/:id", async(req, res) =>{
    try{
        const post= await Post.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(post);
    }
    catch(error){
        return res.status(500).send({message:"Post Deleted"});
    }
});

//Connection
app.listen(3000, async () =>{
    try{
        await connect();
    }
    catch(error){
        console.log(error);
    }
    console.log("Activation Completed 3000")
});