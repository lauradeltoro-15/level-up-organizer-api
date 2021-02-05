import { Application } from "express";

require("dotenv").config();

// Database
require("./configs/mongoose.config");

// App
const express = require("express");
const app: Application = express();

// Configs
require("./configs/middleware.config")(app);
require("./configs/locals.config")(app);

// Routes index
require("./routes")(app);

module.exports = app;
