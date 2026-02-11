import 'dotenv/config';
import express from "express";
import cors from "cors";
import { connectDB } from "../db/connectDB.js";
import journalRouter from "./routes/journalRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.use("/api/journal", journalRouter);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});