import { Application } from "express";

module.exports = (app: Application) => {
  // Base URLS
  app.use("/api", require("./base"));
};
