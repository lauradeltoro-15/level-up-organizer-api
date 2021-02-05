import { Application } from "express";

module.exports = (app: Application) => {
  // Base URLS
  app.use("/", require("./base.routes"));
};
