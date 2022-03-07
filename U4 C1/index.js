const express= require("express");
const app= express();

app.use(logger);
// app.use(checkPermission);

app.get("/books", (req, res)=>{
    res.send('{ route: "/books"}');
});

app.get("/libraries", (req, res)=>{
    res.send('{ route: "/libraries", permission: true}');
});

app.get("/authors", (req, res)=>{
    res.send('{ route: "/authors", permission: true}');
});

function logger(req, res, next){
    console.log("logger");
    next();
}

// app.listen(1000);

// function checkPermission(req, res, data){
//     app.get("/libraries", (res, req)=>{
//         res.send('checkPermission("librarian")');
//     });
//     app.get("/authors", (res, req)=>{
//         res.send('checkPermission("author")');
//     });
//     console.log("permission: true");
//     data();

// }

app.listen(1000);
