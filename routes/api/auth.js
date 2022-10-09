const express = require("express");

const router = express.Router();

const { validation, ctrlWrapper, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");
const { auth: ctrl } = require("../../controllers");

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.post(
  "/signup",
  validation(schemas.registerJoiSchema),
  ctrlWrapper(ctrl.register)
);

router.post(
  "/login",
  validation(schemas.loginJoiSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));
module.exports = router;
