const User = require("../models/user");

exports.list = async (req, res) => {
    try {
        // Code
        const user = await User.find({}).select("-password").exec();
        res.send(user);
      } catch (err) {
        console.log(err);
        res.status(500).send("Server Error!");
      }
}

