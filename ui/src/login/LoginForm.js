import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";
import Navbar from "../navbar/Navbar"; // Import Navbar component
import { useNavigate } from "react-router-dom"; // Import useHistory hook

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOTP] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/ecommerce/login",
        {
          username,
          password,
          otp,
        }
      );
      // Assuming the response contains a token or user object upon successful login
      console.log(response.data);
      // Redirect to another page or perform actions upon successful login
      localStorage.setItem("isLoggedIn", "true");
      navigate("/catalog"); // Navigate to login page
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to login. Please try again.");
    }
  };

  const handleGenerateOTP = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/ecommerce/generate-otp/${username}`
      );
      // Assuming the response contains the generated OTP
      setOTP(response.data);
      setShowModal(true);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to generate OTP. Please try again.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="card login-card">
          <div className="card-body">
            <h2 className="card-title">Login</h2>
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="otp"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
        <div className="card otp-card">
          <div className="card-body">
            <h2 className="card-title">Generate OTP</h2>
            <div className="form-group">
              <button className="generate-otp-btn" onClick={handleGenerateOTP}>
                Generate OTP
              </button>
              <p className="otp-info">
                An OTP will be sent to your registered email or phone
              </p>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              <h3>Your OTP</h3>
              <p>{otp}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
