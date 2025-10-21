import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Booking from "./pages/Booking";
import Signin from "./pages/Signin";
import Navbar from "./components/Navbar";
import { CartProvider } from "./CartContext";  
import Cart from "./pages/Cart"; 
import Payment from "./pages/Payment";
 import UpiPayment from "./pages/UpiPayment";
import CardPayment from "./pages/CardPayment";
import Success from "./pages/Success";
import Checkout from "./pages/Checkout";
            

function App() {
  return (
    <CartProvider>   {/* ✅ Wrap the entire app */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/payment" element={<Payment />} />
           <Route path="/upi" element={<UpiPayment />} />
          <Route path="/card" element={<CardPayment />} />
          <Route path="/success" element={<Success />} />
         <Route path="/checkout" element={<Checkout />} />
         

          
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
