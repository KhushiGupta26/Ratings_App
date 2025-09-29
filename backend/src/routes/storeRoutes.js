const express = require("express");
const Store = require("../models/Store");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

// Create store (protected)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, email, address, ownerId } = req.body;
    const store = await Store.create({ name, email, address, ownerId });
    res.status(201).json({ message: "Store created", store });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// List stores (public)
router.get("/", async (req, res) => {
  try {
    const stores = await Store.findAll();
    res.json(stores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
