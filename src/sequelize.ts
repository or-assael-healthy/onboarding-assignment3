import { Sequelize } from "sequelize";

const sequelize = new Sequelize("assignment3", "or.assael", undefined, {
  host: "localhost",
  dialect: "postgres",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
  throw error;
}

export default sequelize;
