const express = require("express");

const router = express.Router();

const {
  validation,
  ctrlWrapper,
  authenticate,
  upload,
} = require("../../middlewares");

const { schemas } = require("../../models/user");
const { auth: ctrl } = require("../../controllers");

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.post(
  "/signup",
  validation(schemas.registerJoiSchema),
  ctrlWrapper(ctrl.register)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify));

router.post(
  "/verify",
  validation(schemas.verifyEmailSchema),
  ctrlWrapper(ctrl.resendVerify)
);

router.post(
  "/login",
  validation(schemas.loginJoiSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
