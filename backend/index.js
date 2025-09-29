const express = require("express");
const cors = require("cors");
const sequelize = require("./src/config/db");

const userRoutes = require("./src/routes/userRoutes");
const storeRoutes = require("./src/routes/storeRoutes");
const ratingRoutes = require("./src/routes/ratingRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/users", userRoutes);
app.use("/stores", storeRoutes);
app.use("/ratings", ratingRoutes);

// sync db and start
sequelize.sync({ alter: false })
  .then(() => console.log("✅ Database synced (tables ready)"))
  .catch(err => console.log("❌ DB Error:", err));

app.get("/", (req, res) => res.send("Backend is running 🚀"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
