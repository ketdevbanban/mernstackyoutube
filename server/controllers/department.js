const Department = require("../models/department");

exports.create = async (req, res) => {
  try {
    const department = await new Department(req.body).save();
    res.send(department);
  } catch (error) {
    res.status(500).send("server error!!");
  }
};
exports.list = async (req, res) => {
  try {
    const all = await Department.find({});
    res.json(all);
  } catch (error) {
    console.log(error);

    return res.status(400).json(error.message);
  }
};
exports.read = async (req, res) => {
  try {
    const single = await Department.findById({ _id: req.params.id });
    res.json(single);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};
exports.remove = async (req, res) => {
  try {
    const removed = await Department.findByIdAndDelete({ _id: req.params.id });
    res.json(removed);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};
exports.update = async (req, res) => {
  try {
    const { name_la, name_en, description_la } = req.body;
    const department = await Department.findByIdAndUpdate(
      { _id: req.params.id },
      { name_la, name_en, description_la },
      { new: true }
    );
    res.json(department);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};
