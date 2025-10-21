// src/CartContext.js
import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, selectedSize = null, selectedPrice = null) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.name === item.name && i.size === selectedSize
      );
      if (existing) {
        return prev.map((i) =>
          i.name === item.name && i.size === selectedSize
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        return [
          ...prev,
          {
            ...item,
            size: selectedSize,
            price: Number(selectedPrice || item.price), // ✅ force number
            quantity: 1,
          },
        ];
      }
    });
  };

  const decreaseFromCart = (item, selectedSize = null) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.name === item.name && i.size === selectedSize
      );
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i.name === item.name && i.size === selectedSize
            ? { ...i, quantity: i.quantity - 1 }
            : i
        );
      } else {
        return prev.filter(
          (i) => !(i.name === item.name && i.size === selectedSize)
        );
      }
    });
  };

  const removeFromCart = (item, selectedSize = null) => {
    setCartItems((prev) =>
      prev.filter(
        (i) => !(i.name === item.name && i.size === selectedSize)
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, decreaseFromCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
