import express from "express";
import cors from "cors";
import { connectDB } from "../db/connectDB";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.get("/api/testing", (req, res) => {
    res.json({ message: "Hello from the server!" });
})


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});