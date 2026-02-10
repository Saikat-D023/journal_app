import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 3000;

app.get("/api/testing", (req, res) => {
    res.json({ message: "Hello from the server!" });
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});