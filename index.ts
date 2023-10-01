import Logger from "@ownhealthil/logger";
import { auditLogMiddleware } from "@ownhealthil/middleware";
import express from "express";
import { userRoutes } from "./src/routes/user.js";

const logger = new Logger({ name: "my-app" });

const app = express();
// const auditLog = auditLogMiddleware({ logger: logger });
const port = 3000;

// app.use(auditLog);
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
