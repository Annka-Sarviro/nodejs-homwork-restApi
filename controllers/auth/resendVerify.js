const { User } = require("../../models/user");
const createError = require("http-errors");

const { sendEmail, createVerifyEmail } = require("../../helpers");

const resendVerify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(400, "Email not found");
  }

  if (user.verificationToken === "") {
    if (!user) {
      throw createError(400, "Verification has already been passed");
    }
  }
  const mail = createVerifyEmail(email, user.verificationToken);
  await sendEmail(mail);

  res.json({
    message: "Verify email resend",
  });
};

module.exports = resendVerify;
