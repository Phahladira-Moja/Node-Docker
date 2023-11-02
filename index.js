const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://root:root@mongo:27017/?authSource=admin")
  .then(() => console.log("successfully connected to DB"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  return res.send("<h2>Hi there</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
// 172.29.0.2
