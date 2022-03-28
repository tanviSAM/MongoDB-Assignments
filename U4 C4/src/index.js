const express = require("express");
const connect = require("./configs/db");

const app = express();
app.use(express.json);

const userController = require("./controllers/user.controller");
app.use("/user", userController);

const todoController = require("./controllers/todo.controllers");
app.use("/todo", todoController);

module.exports = app;