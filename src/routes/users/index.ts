import { NextFunction, Request, Response } from "express";

const express = require("express");
const router = express.Router();

router.put("/:id", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "User updated" });
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "User deleted" });
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "User obtained" });
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "User created" });
});

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Estoy en users");
});

module.exports = router;
