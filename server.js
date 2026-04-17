const express = require("express");
const app = express();
const db = require("./models");

const authorRoutes = require("./routes/authorRoutes");
const bookRoutes = require("./routes/bookRoutes");

app.use(express.json());

app.use("/api", authorRoutes);
app.use("/api", bookRoutes);

app.get("/", (req, res) => {
  res.send("Library API is running");
});

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
