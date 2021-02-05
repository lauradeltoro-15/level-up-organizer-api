import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

// Endpoints
router.get("/", (req: Request, res: Response) => res.send("wawadhakhdahkdaud"));

module.exports = router;
