// index.js
const express = require("express");
const app = express();

// Railway প্রদত্ত PORT অথবা লোকাল 3000
const PORT = process.env.PORT || 3000;

// রুট রিকোয়েস্ট হ্যান্ডলার
app.get("/", (req, res) => {
  res.send("Hello Railway 🚂✨ Your app is working!");
});

// সার্ভার চালু করা
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
