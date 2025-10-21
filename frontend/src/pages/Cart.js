// src/pages/Cart.js
import React from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom"; // ✅ for navigation
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-left">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    {item.size && <p>Size: {item.size}</p>}
                    <p>₹{item.price * item.quantity}</p>
                    <p>Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="cart-item-right">
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <h2>Total: ₹{total}</h2>

          {/* ✅ Proceed to Payment Button */}
          <button
              className="proceed-btn"
              onClick={() => navigate("/checkout")}
                 >   
                   Proceed to Checkout
          </button>

        </>
      )}
    </div>
  );
};

export default Cart;
