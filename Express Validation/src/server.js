const app = require("./index");
const connect = require("./configs/db.connect");

//server connection
app.listen(3000, async () => {
    try {
        await connect();
        console.log("Activation successfull 3000")
    } catch (err) {
        console.error(err.message);
    }
});