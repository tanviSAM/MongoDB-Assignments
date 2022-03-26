const mongoose=require("mongoose");

const UserSchema=mongoose.Schema(
    {
        "first_name":{type:String,required:false},
        "last_name":{type:String,required:false},
        "profile_pic":[{type:String,required:true}]
    },
    {
        versionKey:false,
        timestamps:true,
    }
);

module.exports=mongoose.model("users",UserSchema);