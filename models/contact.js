const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleSaveErrors } = require("../middlewares");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },

  {
    writeConcern: {
      w: "majority",
      j: true,
      wtimeout: 1000,
    },
  }
);

contactSchema.post("save", handleSaveErrors);

const addJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    // .pattern(/^(\s*)?(\+)?([- _():+]?\d[- _():+]?){10,14}(\s*)?$/)
    .required(),
  favorite: Joi.boolean(),
});

const updateFavoriteJoiSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = { addJoiSchema, updateFavoriteJoiSchema };

const Contact = model("contact", contactSchema);

module.exports = { Contact, schemas };
