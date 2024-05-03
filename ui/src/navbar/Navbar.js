import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    // Navigate to the landing page or any other desired page
    navigate("/home");
  };

  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <nav className="navbar">
      <div className="brand">MyShop</div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        {/* Conditionally render catalog link if logged in */}
        {isLoggedIn && (
          <li>
            <a href="/catalog">Products</a>
          </li>
        )}
        {/* Conditionally render login/logout links */}
        <li>
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <a href="/login">Login</a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
