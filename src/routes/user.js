const express = require("express");
const { inputValidation } = require("@ownhealthil/middleware");
const { InternalServerError } = require("@ownhealthil/http-errors");
const {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
} = require("../handlers/user");
const logger = require("../logger");
const schemas = require("../schemas");

const router = express.Router();
const inputValidator = inputValidation({ logger });

router.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    next(
      new InternalServerError({
        error: error,
        message: `Error in getAllUsers`,
        displayMessage: error.message,
      })
    );
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
      next(
        InternalServerError({
          error: error,
          message: "Error in getUserById",
          displayMessage: error.message,
          details: { userId },
        })
      );
    }
  }
);

router.post(
  "/",
  inputValidator(schemas.createUser, "query"),
  async (req, res, next) => {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "or.assael+test@healthy.io", // Change to your recipient
      from: "or.assael+sendgrid@healthy.io", // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    //   const { name, phoneNumber, email } = req.query;
    //   try {
    //     const userCreated = await createUser(name, phoneNumber, email);
    //     res.send(userCreated);
    //   } catch (error) {
    //     next(
    //       new InternalServerError({
    //         error: error,
    //         details: { name, phoneNumber, email },
    //         displayMessage: error.message || "Error when creating user",
    //       })
    //     );
    //   }
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
      next(
        InternalServerError({
          error,
          message: "Error in deleteUser",
          details: { userId },
          displayMessage: error.message,
        })
      );
    }
  }
);

module.exports = router;
