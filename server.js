const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use("/static", express.static(path.resolve("./public")));
app.get("/", function(req, res) {
  res.sendFile(path.resolve("./index.html"))
})

app.listen(port, () => console.log("launching"))