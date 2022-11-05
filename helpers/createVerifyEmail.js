const { BASE_URL } = process.env;

const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: "You must confirm your email address",
    html: `<a target = "_blank" href ="${BASE_URL}/api/users/verify/${verificationToken}">Enter to confirm</a>`,
  };

  return mail;
};

module.exports = createVerifyEmail;
