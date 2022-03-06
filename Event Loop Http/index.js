const express= require("express");
const app= express();

app.get("/", function (req, res){
    res.send("Hello");
});

app.listen(5000, ()=> {
    console.log("listen(5000)")
});

app.get("/books", function (req, res){
    res.send({book1: "Who Moved My Cheese", book2: "Rich Dad Poor Dad", book3: "Atomic Habits", book4:"Crazy Rich Asain"});
});