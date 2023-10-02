const Joi = require("joi");

const deleteUserSchema = Joi.object({
  id: Joi.string().uuid().required(),
});

module.exports = deleteUserSchema;
