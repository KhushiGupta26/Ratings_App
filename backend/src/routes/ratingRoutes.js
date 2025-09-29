const express = require("express");
const Rating = require("../models/Rating");
const Store = require("../models/Store");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

// Add or update rating (protected)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { storeId, rating } = req.body;
    const userId = req.user.id;

    if (!storeId || typeof rating !== "number") return res.status(400).json({ error: "Missing storeId or rating" });

    let existing = await Rating.findOne({ where: { userId, storeId } });
    if (existing) {
      existing.rating = rating;
      await existing.save();
      // update avg after update below
    } else {
      existing = await Rating.create({ userId, storeId, rating });
    }

    // Recalculate avg
    const ratings = await Rating.findAll({ where: { storeId } });
    const avg = ratings.reduce((a, r) => a + r.rating, 0) / ratings.length;
    const store = await Store.findByPk(storeId);
    if (store) {
      store.avgRating = avg;
      await store.save();
    }

    res.json({ message: "Rating saved", rating: existing });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get ratings for a store
router.get("/store/:storeId", async (req, res) => {
  try {
    const { storeId } = req.params;
    const ratings = await Rating.findAll({ where: { storeId }, include: [] });
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
