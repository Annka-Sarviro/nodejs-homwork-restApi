const { Contact } = require("../../models/contact");

const createError = require("http-errors");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;

  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

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
