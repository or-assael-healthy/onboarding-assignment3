const logger = require("./logger");
const { auditLogMiddleware } = require("@ownhealthil/middleware");
const routes = require("./routes");

const auditLog = auditLogMiddleware({
  logger,
  level: "info",
});

module.exports = (app) => {
  app.use(auditLog);
  app.use("/users", routes.userRoutes);
};
