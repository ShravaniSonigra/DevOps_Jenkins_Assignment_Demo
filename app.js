
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/api/status", (req, res) => {
  res.json({
    status: "success",
    message: "DevOps Demo application is running!",
    service: "Jenkins + GitHub Integration"
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(PORT, () => {
  console.log(`DevOps Demo running at http://localhost:${PORT}`);
});
