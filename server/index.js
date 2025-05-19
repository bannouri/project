const express = require('express');
const cors = require('cors');
const db = require("./config/db")
const app = express();
const PORT = 3000;
const Famme = require('./routes/Famme');
const Homme = require('./routes/Homme');
// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/homme",Homme)
app.use("/api/famme",Famme)
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
