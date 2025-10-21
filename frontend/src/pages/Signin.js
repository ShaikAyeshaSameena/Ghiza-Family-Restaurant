// src/pages/Signin.js
import React, { useState } from "react";
import "./Signin.css";

const Signin = () => {
  const [isLogin, setIsLogin] = useState(false); // 🔄 toggle between Sign Up & Login
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  // Handle form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // ✅ LOGIN
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.email === form.email &&
        storedUser.password === form.password
      ) {
        alert("Login successful 🎉");
        // redirect example: window.location.href = "/";
      } else {
        alert("Invalid email or password ❌");
      }
    } else {
      // ✅ SIGN UP
      if (form.password !== form.confirm) {
        alert("Passwords do not match ❌");
        return;
      }
      const user = {
        name: form.name,
        email: form.email,
        password: form.password,
      };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Sign up successful! 🎉 Now log in.");
      setIsLogin(true); // switch to login
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2>{isLogin ? "Login" : "Create Account"}</h2>

        <form onSubmit={handleSubmit}>
          {/* Signup fields */}
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirm"
                placeholder="Confirm Password"
                value={form.confirm}
                onChange={handleChange}
                required
              />
            </>
          )}

          {/* Login fields */}
          {isLogin && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </>
          )}

          <button type="submit" className="signin-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Bottom toggle link */}
        <p className="toggle-text">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign Up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Log in</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Signin;
