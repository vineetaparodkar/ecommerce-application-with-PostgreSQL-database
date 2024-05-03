// LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory hook
import "./Lending.css"; // Import CSS file for styling

const LendingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to navigate to login page
  const handleLogin = () => {
    navigate("/login"); // Navigate to login page
  };

  // Function to navigate to register page
  const handleRegister = () => {
    navigate("/register"); // Navigate to register page
  };

  // Function to navigate to register page
  const handleForgotPassword = () => {
    navigate("/forgot-password"); // Navigate to register page
  };

  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="content">
        <h1>Welcome to our Ecommerce Application</h1>
        <br />
        <br />
        <div className="buttons">
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <br />
          <br />
          <button className="register-button" onClick={handleRegister}>
            Register
          </button>
          <br />
          <br />
          <button className="register-button" onClick={handleForgotPassword}>
            Forgot Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default LendingPage;
