const app = require("./index");
const connect = require("./config/db");

app.listen(5000, async function () {
    try{
        await connect();
        console.log("listening to port 5000");
    } catch (err) {
        console.log(err.message);
    }
});