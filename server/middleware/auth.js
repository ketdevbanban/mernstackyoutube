const jwt = require("jsonwebtoken");
const user = require("../models/user");

exports.auth = (req, res, next) => {
  const token = req.headers["authtoken"];
  if (!token) {
    return res.status(401).send("no token , authorization denied");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.log(err);
    res.status(401).send("Token Invavid!!");
  }
};

