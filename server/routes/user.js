const express = require("express");
const router = express.Router();

//controller
const { list } = require("../controllers/user");

router.get("/users", list);

module.exports = router;
``