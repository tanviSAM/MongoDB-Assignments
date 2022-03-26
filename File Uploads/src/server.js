const app = require("./index");

const connect = require("./configs/db.connect");

app.listen(3000, async () => {
  try {
    await connect();
    console.log("listining at port 3000");
  } catch (err) {
    console.log(err);
  }
});
