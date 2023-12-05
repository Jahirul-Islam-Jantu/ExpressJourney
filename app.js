const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express(); //we create a app using express function call

app.use(morgan("dev")); //this command is used mainly for use middleware in app
app.use(express.urlencoded({ extended: true })); //middleware
app.use(express.json()); //middleware

app.get("/", (req, res) => {
  req.json({
    message: "i am root route",
  });
}); //root route

mongoose.connect("mongodb://127.0.0.1:27017/test");
