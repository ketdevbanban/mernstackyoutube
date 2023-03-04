const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const departmentSchema = Schema(
  {
    name_la: { type: String, required: true },
    name_en: { type: String, required: true },
    description_la: { type: String },
  },
  { timestamps: true }
);
module.exports = model("Department", departmentSchema);
