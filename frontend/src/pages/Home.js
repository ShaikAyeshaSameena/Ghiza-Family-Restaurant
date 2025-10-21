// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import hero from "../assets/hero.jpg";
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          background: `linear-gradient(rgba(11,26,54,0.25), rgba(11,26,54,0.25)), url(${hero}) no-repeat center/cover`,
          height: "100vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Ghiza Logo"
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            height: "70px",
          }}
        />

        <div className="hero-overlay">
          <div className="hero-text">
            <h1
              style={{
                fontFamily: "'Amiri', serif",
                fontSize: "3.2rem",
                color: "#F1EADA",
                marginBottom: "20px",
              }}
            >
              Ghiza Family Restaurant & Arabian Mandi
            </h1>
            <p
              style={{
                fontFamily: "'Cairo', sans-serif",
                fontSize: "1.3rem",
                color: "#F1EADA",
                marginBottom: "40px",
              }}
            >
              Experience the finest Arabian Mandi & Family Dining
            </p>

            {/* Buttons */}
            <div
              className="hero-buttons"
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <Link to="/menu">
  <button
    style={{
      padding: "14px 32px",
      fontSize: "1.1rem",
      fontWeight: "bold",
      borderRadius: "30px",
      background: "#3D1F12",
      color: "#F1EADA",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontFamily: "'Cairo', sans-serif",
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = "scale(1.05)";
      e.target.style.boxShadow = "0 0 12px rgba(241, 234, 218, 0.7)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "scale(1)";
      e.target.style.boxShadow = "none";
    }}
  >
    🍽️ Order Now
  </button>
</Link>

<Link to="/booking">
  <button
    style={{
      padding: "14px 32px",
      fontSize: "1.1rem",
      fontWeight: "bold",
      borderRadius: "30px",
      background: "#3D1F12",
      color: "#F1EADA",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontFamily: "'Cairo', sans-serif",
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = "scale(1.05)";
      e.target.style.boxShadow = "0 0 12px rgba(241, 234, 218, 0.7)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "scale(1)";
      e.target.style.boxShadow = "none";
    }}
  >
    📅 Book a Table
  </button>
</Link>

            </div>
          </div>

          {/* Scroll Down */}
          <div
            className="scroll-down"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "2rem",
              color: "#facc15",
              cursor: "pointer",
              animation: "bounce 2s infinite",
            }}
          >
            ↓
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        style={{
          padding: "80px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
          background: "#fff",
        }}
      >
        <img
          src={dish1}
          alt="About Ghiza"
          style={{
            width: "400px",
            borderRadius: "15px",
            objectFit: "cover",
          }}
        />
        <div style={{ maxWidth: "500px", color: "#222" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              color: "#0b1a36",
            }}
          >
            About Ghiza
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
            Welcome to <b>Ghiza Family Restaurant & Arabian Mandi</b>, where tradition meets taste. 
            We specialize in bringing the authentic flavors of Arabia to your table, 
            with our signature Mandi, rich biryanis, and a wide variety of delights.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            At Ghiza, dining is more than just food — it’s an experience of togetherness, 
            flavor, and comfort. Whether you’re here with family, friends, or colleagues, 
            we promise freshly prepared dishes, a warm ambiance, and service that makes 
            you feel at home.
          </p>
        </div>
      </section>

      {/* POPULAR DISHES */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "#f8f8f8",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "40px", color: "#0b1a36" }}>
          Popular Dishes
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {[dish1, dish2, dish3].map((dish, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                padding: "15px",
                width: "280px",
              }}
            >
              <img
                src={dish}
                alt={`Dish ${i + 1}`}
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "15px",
                }}
              />
              <h3>Dish {i + 1}</h3>
              <p style={{ fontSize: "0.95rem", color: "#444" }}>
                A special dish from our menu that customers love.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          padding: "80px 20px",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "30px", color: "#0b1a36" }}>
          Why Choose Ghiza?
        </h2>
        
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            maxWidth: "600px",
            margin: "0 auto",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#444",
          }}
        >
          <li>✅ Authentic Arabian Mandi experience</li>
          <li>✅ Family-friendly ambiance</li>
          <li>✅ Fresh ingredients & traditional spices</li>
          <li>✅ Hygienic kitchen & fast service</li>
        </ul>
      </section>
      <Footer/>
    </>
    
  );
};

export default Home;
