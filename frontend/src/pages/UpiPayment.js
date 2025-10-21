// src/pages/UpiPayment.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const UpiPayment = () => {
  const navigate = useNavigate();

  return (
    <div className="upi-section">
      <h2>Scan & Pay via UPI</h2>
      <img src="/upi-qr.png" alt="UPI QR Code" className="upi-qr" />
      <p>Scan this QR using Google Pay / PhonePe / Paytm</p>

      {/* ✅ Back Button */}
      <button className="back-btn" onClick={() => navigate("/payment")}>
        ← Back
      </button>
    </div>
  );
};

export default UpiPayment;
