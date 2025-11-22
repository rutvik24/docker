import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/user", (req, res) => {
  res.json({ success: true, message: "User route accessed successfully" });
});

app.get("/dashboard", (req, res) => {
  res.json({ success: true, message: "Dashboard route accessed successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
