import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../CartContext"; // ✅ import cart context
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState({
    name: "Shaik Ayesha Sameena",
    email: "ayeshasameena1028@gmail.com",
    photo: null
  });

  const { cartItems } = useCart(); // ✅ get cart items
  const cartCount = cartItems.length;

  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setShowProfile(false);
    setEditProfile(false);
    alert("Logged out successfully!");
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        
      </div>

      <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
        <li className="cart-link">
          <Link to="/cart" onClick={() => setIsOpen(false)}>
            <FaShoppingCart /> Cart
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </li>
        <li><Link to="/booking" onClick={() => setIsOpen(false)}>Booking</Link></li>

        <li className="signin-link">
          <Link to="/signin" onClick={() => setIsOpen(false)}>Signin</Link>
        </li>

        <li className="profile-dropdown-container">
          <div className="profile-icon" onClick={() => setShowProfile(!showProfile)}>
            {user?.photo ? (
              <img src={user.photo} alt="Profile" className="profile-pic" />
            ) : (
              <FaUserCircle size={28} color="#F1EADA" />
            )}
          </div>

          {showProfile && (
            <div className="profile-dropdown">
              <div className="profile-section">
                {user?.photo ? (
                  <img src={user.photo} alt="Profile" className="profile-pic-large" />
                ) : (
                  <FaUserCircle size={60} color="#3D1F12" />
                )}

                {!editProfile ? (
                  <>
                    <h3>{user.name || "Your Name"}</h3>
                    <p>{user.email || "Your Email"}</p>
                    <button className="edit-btn" onClick={() => setEditProfile(true)}>Edit Profile</button>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      value={user.name || ""}
                      onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />
                    <input
                      type="email"
                      placeholder="Enter Email"
                      value={user.email || ""}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    <button className="save-btn" onClick={() => setEditProfile(false)}>Save</button>
                  </>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = () => setUser({ ...user, photo: reader.result });
                    if (file) reader.readAsDataURL(file);
                  }}
                />
              </div>

              <hr />

              <div className="profile-links">
                <Link to="/orders" onClick={() => setShowProfile(false)}>Order History</Link>
                <Link to="/reorder" onClick={() => setShowProfile(false)}>Reorder Items</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
