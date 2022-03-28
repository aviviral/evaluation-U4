const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller")
const todoController = require("./controllers/todo.controllers")
const {register,login,generateToken} = require("./controllers/auth.controller")

const app = express();

app.listen(5000,async()=>{
    try {
        await connect();
        console.log("listening on port 5000")
    } catch (err) {
console.log(err.message); 
    }
})