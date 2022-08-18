const express = require("express");
const router = express.Router();
const v1 = require("./v1");
const error = require("../error");
const auth = require("./../auth");

router.use(`*`,
  auth,
  v1.validate,
  v1.search,
  v1.setType,
  v1.logRequest,
  error
);


module.exports = router;