// src/pages/CardPayment.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const CardPayment = () => {
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success"); // ✅ after successful card entry
  };

  return (
    <div className="card-section">
      <h2>Enter Card Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={cardDetails.number}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Cardholder Name"
          value={cardDetails.name}
          onChange={handleChange}
          required
        />
        <div className="card-row">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={cardDetails.expiry}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="cvv"
            placeholder="CVV"
            value={cardDetails.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="pay-btn">Pay Now</button>
      </form>

      {/* ✅ Back Button */}
      <button className="back-btn" onClick={() => navigate("/payment")}>
        ← Back
      </button>
    </div>
  );
};

export default CardPayment;
