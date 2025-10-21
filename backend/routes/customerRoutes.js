const express = require("express");
const { isAuthenticated } = require("../middleware/authMiddleware");
const Booking = require("../models/Booking");


const router = express.Router();

// ✅ Customer books a table
router.post("/book-table", isAuthenticated, async (req, res) => {
  try {
    const booking = new Booking({
      user: req.user.id,
      tableNumber: req.body.tableNumber,
      date: req.body.date,
      time: req.body.time,
    });
    await booking.save();
    res.json({ message: "Table booked successfully!", booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Customer views own bookings
router.get("/my-bookings", isAuthenticated, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
