require("dotenv").config();
const express = require("express");
const setupRoutes = require("./routings");

const app = express();
const port = 3000;

setupRoutes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
