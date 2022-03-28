const app = require("./index");
const connect = require("./configs/db");

app.listen(3000, async function(){
    try{
        await connect();
        console.log("Activated 3000 port");
    } catch(err){
        console.log("Error. Please check again" + err);
    }
});