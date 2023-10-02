const Joi = require("joi");

const getUserSchema = Joi.object({
  id: Joi.string().uuid().required(),
});

module.exports = getUserSchema;
