const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();
const { readdirSync } = require("fs");
const connectDB = require("./config/db");

const app = express();

//connect DB
connectDB();

//middle ware
app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
app.use(morgan("dev"));

//Routes
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const port = process.env.PORT || 8000;
//All routes

app.listen(port, () => {
  console.log(`Server runing on port ${port}`);
});
