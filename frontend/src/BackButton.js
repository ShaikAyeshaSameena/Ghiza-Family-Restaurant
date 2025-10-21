// src/components/BackButton.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // optional icon

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)} 
      className="back-btn"
    >
      <FaArrowLeft style={{ marginRight: "8px" }} />
      Back
    </button>
  );
};

export default BackButton;
