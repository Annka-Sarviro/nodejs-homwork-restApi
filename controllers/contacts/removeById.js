const { Contact } = require("../../models/contact");
const createError = require("http-errors");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw createError(404, "Contact not found");
  }

  res.json({
    status: "success",
    message: "contact deleted",
    code: 200,
    data: { result },
  });
};

module.exports = removeById;
