// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LendingPage from "./lending/Lending";
import RegistrationForm from "./registration/RegistrationForm";
import ProductCatalogue from "./product/ProductCatalogue";
import ForgotPassword from "./password/ForgotPassword";
import ChangePassword from "./password/ChangePassword";
import LoginForm from "./login/LoginForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LendingPage />} />
        <Route path="/home" element={<LendingPage />} />
        <Route path="/catalog" element={<ProductCatalogue />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
