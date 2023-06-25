const express = require("express");
const router = express.Router();
// import middleware
const { verifyToken } = require("../middleware");
// import controller register
const { register, test } = require("../controllers/user.controller");

router.route("/register").post(register);
router.route("/test").get(test);

module.exports = router;
