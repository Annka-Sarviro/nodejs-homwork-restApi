const { Contact } = require("../../models/contact");
const createError = require("http-errors");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);

  if (!contact) {
    throw createError(404, "Contact not found");
  }

  res.json({
    status: "success",
    code: 200,
    data: { contact },
  });
};

module.exports = getById;
