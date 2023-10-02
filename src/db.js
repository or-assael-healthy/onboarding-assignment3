const { DB } = require("@ownhealthil/db");

/**
 * @typedef db
 * @type {object}
 * @property {import('sequelize').Sequelize} sequelize
 * @property {object} models
 * @property {import('./models/user').User} models.User
 */

const options = {
  // eslint-disable-next-line no-undef
  modelsPath: `${__dirname}/models`,
};

const db = new DB(options);

const authDB = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
authDB();

module.exports = db;
