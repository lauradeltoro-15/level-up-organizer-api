import { Application } from "express";

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

module.exports = (app: Application) => {
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
};
