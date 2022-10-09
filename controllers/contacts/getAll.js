const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  const { page = 1, limit = 20, ...query } = req.query;

  const { _id: owner } = req.user;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find(
    { owner, ...query },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  ).populate("owner", "email");
  res.json({
    status: "success",
    code: 200,
    data: contacts,
  });
};

module.exports = getAll;
