const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^(\s*)?(\+)?([- _():+]?\d[- _():+]?){10,14}(\s*)?$/)
    .required(),
});

module.exports = contactSchema;
