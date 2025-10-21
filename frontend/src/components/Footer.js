import React from "react";
import { FaPhoneAlt, FaInstagram, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const Footer = () => {
  // Reusable icon style
  const iconStyle = {
    color: "#F1EADA",        // beige icon
    background: "#3D1F12",   // brown circle
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.3rem",
    transition: "all 0.3s ease",
  };

  // Hover effects (zoom + glow)
  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.1)";
    e.target.style.boxShadow = "0 0 12px rgba(241, 234, 218, 0.6)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "none";
  };

  return (
    <footer
      style={{
        background: "#3D1F12",
        color: "#F1EADA",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginBottom: "15px",
        }}
      >
        {/* 📞 Phone */}
<a
  href="tel:+917207337726"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "8px",
    textDecoration: "none",
    color: "#F1EADA",
    fontSize: "1rem",
  }}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <div style={iconStyle}>
    <FaPhoneAlt />
  </div>
  +91 72073 37726
</a>


        {/* ⭐ Google Reviews */}
        <a
          href="https://www.google.com/search?q=ghiza+family+restaurant+reviews"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaStar />
        </a>

        {/* 📍 Location */}
        <a
          href="https://maps.app.goo.gl/aoVh1wnr55zpP8NE9?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaMapMarkerAlt />
        </a>

        {/* 📸 Instagram */}
        <a
          href="https://www.instagram.com/ghizarestaurants?igsh=NHZmbWJobWk1N2d6"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaInstagram />
        </a>
      </div>

      <p style={{ fontSize: "0.9rem", color: "#ccc" }}>
        © {new Date().getFullYear()} Ghiza Family Restaurant. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
