const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
} = require("../handlers/user");
const { inputValidation } = require("@ownhealthil/middleware");
const logger = require("../logger");
const schemas = require("../schemas");

const router = express.Router();
const inputValidator = inputValidation({ logger });

router.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    const errorMessage = `Error in getAllUsers: ${error.message | error}`;
    logger.error(errorMessage);
    next(errorMessage);
    return;
  }
});

router.get(
  "/:id",
  inputValidator(schemas.getUser, "params"),
  async (req, res, next) => {
    const userId = req.params.id;
    try {
      const user = await getUserById(userId);
      res.send(user);
    } catch (error) {
      const errorMessage = `Error in getUserById with id = ${userId}: ${
        error.message | error
      }`;
      logger.error(errorMessage);
      next(errorMessage);
      return;
    }
  }
);

router.post(
  "/",
  inputValidator(schemas.createUser, "query"),
  async (req, res, next) => {
    const { name, phoneNumber, email } = req.query;
    try {
      const userCreated = await createUser(name, phoneNumber, email);
      res.send(userCreated);
    } catch (error) {
      const errorMessage = `Error in createUser with values ${name}, ${phoneNumber}, ${email}: ${
        error.message | error
      }`;
      logger.error(errorMessage);
      next(errorMessage);
      return;
    }
  }
);

router.delete(
  "/:id",
  inputValidator(schemas.deleteUser, "params"),
  async (req, res, next) => {
    const userId = req.params.id;
    try {
      await deleteUser(userId);
      res.send(`User with id ${userId} was deleted`);
    } catch (error) {
      const errorMessage = `Error in deleteUser with id ${userId}: ${
        error.message | error
      }`;
      logger.error(errorMessage);
      next(errorMessage);
      return;
    }
  }
);

module.exports = router;
