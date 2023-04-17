const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  try {
    // Check User
    const { username, password } = req.body;
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).send("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    user = new User({
      username,
      password,
    });
    // Encrypt
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.send("Register Success");
  } catch (error) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOneAndUpdate({ username }, { new: true });
    if (user && user.enabled) {
      // Check Password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send("Password Invalid!!");
      }
      //Payload
      const payload = {
        user: {
          username: user.username,
          role: user.role,
          _id: user._id,
        },
      };

      //Generate token
      jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        { expiresIn: 86400 },
        (err, token) => {
          if (err) throw err;
          res.json({ token, payload });
        }
      );
    } else {
      return res.status(400).send("User Not found!!!");
    }
  } catch (error) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};
