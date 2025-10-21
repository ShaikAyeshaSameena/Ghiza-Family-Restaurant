import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    mealType: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    guests: 1,
    table: "",
  });

  const tables = ["Table 1", "Table 2", "Cabin A", "Cabin B", "Family Hall"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div className="booking-page">
      <h1 className="booking-title">Reserve Your Table</h1>

      <form className="booking-form" onSubmit={handleSubmit}>
        {/* Meal Type */}
        <label>
          Meal Type
          <select name="mealType" value={formData.mealType} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </label>

        {/* Date & Time */}
        <div className="form-row">
          <label>
            Date
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </label>
          <label>
            Time
            <input type="time" name="time" value={formData.time} onChange={handleChange} required />
          </label>
        </div>

        {/* User Details */}
        <label>
          Full Name
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Phone Number
          <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
        </label>

        {/* Guests */}
        <label>
          Number of Guests
          <input type="number" name="guests" min="1" max="20" value={formData.guests} onChange={handleChange} required />
        </label>

        {/* Table / Cabin Selection */}
        <label>
          Select Table / Cabin
          <select name="table" value={formData.table} onChange={handleChange} required>
            <option value="">Choose...</option>
            {tables.map((t, i) => (
              <option key={i} value={t}>{t}</option>
            ))}
          </select>
        </label>

        {/* Submit */}
        <button type="submit" className="btn-book">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
