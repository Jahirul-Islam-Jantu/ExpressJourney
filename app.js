const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express(); //we create a app using express function call

app.set("view engine", "ejs");

app.use(morgan("dev")); //this command is used mainly for use middleware in app
app.use(express.urlencoded({ extended: true })); //middleware
app.use(express.json()); //middleware

app.get("/", (req, res) => {
  res.render("home");
}); //root route

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    app.listen(4545, () => {
      console.log("app is ready to serve on port 4545");
    });
  })
  .catch((e) => {
    console.log(e);
  });
