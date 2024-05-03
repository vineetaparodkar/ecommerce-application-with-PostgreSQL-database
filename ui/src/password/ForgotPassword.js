import React, { useState } from 'react';
import './ForgotPassword.css';
import Navbar from "../navbar/Navbar"; // Import Navbar component
import { useNavigate } from "react-router-dom"; // Import useHistory hook

function ForgotPassword() {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:8080/ecommerce/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (!response.ok) {
                const errorMessage = await response.text();
                setMessage(`Error: ${errorMessage}`);
                return;
            }
            const userId = await response.json().then(data => data.userId);
            localStorage.setItem('userId', userId);
            setMessage('Password reset link sent successfully!');
            navigate("/change-password"); // Navigate to login page
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while processing your request');
        }
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="ForgotPassword">
                <h2>Forgot Your Password?</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Reset Password</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>

    );
}

export default ForgotPassword;
