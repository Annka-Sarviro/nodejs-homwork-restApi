const bcrypt = require("bcryptjs");

const { User } = require("../../models/user");
const createError = require("http-errors");

const register = async (req, res) => {
  const { password, email, subscription, token } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    password: hashPassword,
    email,
    subscription,
    token,
  });

  res.status(201).json({
    status: "201 Created",
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
