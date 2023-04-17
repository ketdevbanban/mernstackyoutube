const { Schema, objectId, model } = require("mongoose");
const userSchema = new Schema(
  {
    name: {
      type: String,
      default: "",
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    enabled: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
