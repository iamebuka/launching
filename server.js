const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.sendFile(path.resolve("./index.html"))
})

app.listen(port, () => console.log("launching"))