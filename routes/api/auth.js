const express = require("express");

const router = express.Router();

const { validation, ctrlWrapper } = require("../../middlewares");

const { schemas } = require("../../models/user");
const { auth: ctrl } = require("../../controllers");

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

module.exports = router;
