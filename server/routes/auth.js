const express = require("express");
const router = express.Router();

//controller
const { register, login } = require("../controllers/auth");
// middleware
const { auth } = require("../middleware/auth");

router.post("/register", auth, register);
router.post("/login", login);

module.exports = router;
