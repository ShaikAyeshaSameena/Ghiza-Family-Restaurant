import React from "react";
import { Link } from "react-router-dom";
import "./Payment.css"; // using the same CSS file

const Success = () => {
  return (
    <div className="success-page">
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Thank you for ordering with Ghiza Family Restaurant.</p>
      <p>Your delicious food will reach you soon 🍴</p>

      <Link to="/" className="success-btn">
        Back to Home
      </Link>
    </div>
  );
};

export default Success;
