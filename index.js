const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Railway Test Project চলছে ঠিকঠাক!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});