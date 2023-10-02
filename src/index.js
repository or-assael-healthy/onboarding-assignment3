require("dotenv").config();
const express = require("express");
const setupRoutes = require("./routings");

const app = express();
const port = 3000;

setupRoutes(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
