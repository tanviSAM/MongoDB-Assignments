const app=require("./index");
const connect=require("./config/dbconnect");

app.listen(3000,async()=>{
    try{
        await connect();
        console.log('listning at port 3000');
    }catch(err){
        console.log(err);
    }
})