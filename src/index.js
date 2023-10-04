require("dotenv").config();
const express = require("express");
const setupRoutes = require("./routings");
const setUpRabbit = require("./setuprabbit");

const app = express();
const port = 3000;

setupRoutes(app);

setUpRabbit().then(() =>
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
);

//
// export NODE_TLS_REJECT_UNAUTHORIZED=1
