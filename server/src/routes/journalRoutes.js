import express from "express";
import { createEntry, getEntries } from "../controllers/journalController.js";

const journalRouter = express.Router();

journalRouter.post("/", createEntry);
journalRouter.get("/", getEntries);

export default journalRouter;