const contactOperations = require("../../models/contacts");
const createError = require("http-errors");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactOperations.updateContact(contactId, req.body);

  if (!result) {
    throw createError(404, "Contact not found");
  }

  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = updateById;
