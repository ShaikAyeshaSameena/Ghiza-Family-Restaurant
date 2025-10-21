// src/pages/Payment.js
import React, { useState } from "react";
import { useCart } from "../CartContext";
import "./Payment.css";

const Payment = () => {
  const { cartItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  

  const total = cartItems.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div className="payment-page">
      <h1>Payment</h1>

      {/* ✅ Order Summary */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="summary-item">
            <span>
              {item.name} {item.size && `(${item.size})`} × {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      {/* ✅ Total Row */}
      <div className="payment-total">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      {/* ✅ Payment Methods */}
      <div className="payment-methods">
        <h2>Select Payment Method</h2>
        <label>
          <input
            type="radio"
            name="payment"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          UPI (Google Pay / PhonePe / Paytm)
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Credit / Debit Card
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              handlePlaceOrder(); // ✅ Place order instantly for COD
            }}
          />
          Cash on Delivery
        </label>
      </div>

      {/* ✅ Dynamic Sections */}
      {paymentMethod === "upi" && !orderPlaced && (
        <div className="upi-section">
          <h3>Scan & Pay</h3>
          <img
            src="https://i.ibb.co/TqcKcGf9/IMG-20251021-174958.png"
            alt="UPI QR Code"
            className="upi-qr"
          />
          <p>Scan this QR code using Google Pay / PhonePe / Paytm</p>
          <button className="pay-btn" onClick={handlePlaceOrder}>
            Confirm Payment
          </button>
        </div>
      )}

      {paymentMethod === "card" && !orderPlaced && (
        <div className="card-section">
          <h3>Enter Card Details</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePlaceOrder();
            }}
          >
            <input type="text" placeholder="Cardholder Name" required />
            <input type="text" placeholder="Card Number" required />
            <div className="card-row">
              <input type="text" placeholder="MM/YY" required />
              <input type="password" placeholder="CVV" required />
            </div>
            <button type="submit" className="pay-btn">
              Pay ₹{total}
            </button>
          </form>
        </div>
      )}

      {orderPlaced && (
        <div className="order-success">
          <h2>✅ Order Placed Successfully!</h2>
          <p>Thank you for ordering with Ghiza Family Restaurant 🍴</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
