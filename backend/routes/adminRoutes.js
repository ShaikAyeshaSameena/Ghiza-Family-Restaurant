const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");   // ✅ this will work now
const { isAuthenticated, isAdmin } = require("../middleware/authMiddleware");

// Add new menu item (Admin only)
router.post("/menu", isAuthenticated, isAdmin, async (req, res) => {
  try {
    const newItem = new Menu(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: "Failed to add menu item" });
  }
});

// Get all menu items
router.get("/menu", async (req, res) => {
  try {
    const items = await Menu.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
});

module.exports = router;
