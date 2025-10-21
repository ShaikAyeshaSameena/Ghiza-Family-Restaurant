import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.mobile || !formData.address || !formData.pincode) {
      alert("Please fill all required fields!");
      return;
    }

    // 👉 Save customer details in localStorage (or context)
    localStorage.setItem("customerDetails", JSON.stringify(formData));

    // Redirect to payment page
    navigate("/payment");
  };

  return (
    <div className="checkout-page">
  {/* Title separated from form */}
  <h1 className="checkout-title">Customer Details</h1>

  <form className="checkout-form" onSubmit={handleSubmit}>
    <div className="field-box">
      <label>Full Name*</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
    </div>

    <div className="field-box">
      <label>Mobile Number*</label>
      <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
    </div>

    <div className="field-box">
      <label>Email (optional)</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
    </div>

    <div className="field-box">
      <label>Address*</label>
      <textarea name="address" value={formData.address} onChange={handleChange} required />
    </div>

    <div className="field-box">
      <label>City*</label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} required />
    </div>

    <div className="field-box">
      <label>State*</label>
      <input type="text" name="state" value={formData.state} onChange={handleChange} required />
    </div>

    <div className="field-box">
      <label>Pincode*</label>
      <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
    </div>

    <button type="submit" className="checkout-btn">Proceed to Payment</button>
  </form>
</div>

  );
};

export default Checkout;
