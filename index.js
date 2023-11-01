const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("<h2>Hi there</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));