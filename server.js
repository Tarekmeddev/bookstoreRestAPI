const express = require("express");
const mongoose = require("mongoose");
const routers = require("./routers/routers");
require("dotenv").config();
const app = express();
const port = 8000;
const URL = process.env.Mongo_Url;

// middlewere
app.use(express.json());

app.use("/api", routers);

// connect to db
mongoose
  .connect(URL)
  .then(() => {
    app.listen(port, () => {
      console.log("server is running on port:", port);
    });
    console.log("we are connected");
  })
  .catch((err) => {
    console.log(err);
  });
