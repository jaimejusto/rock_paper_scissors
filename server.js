import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})