import React, { useState } from 'react';
import './ChangePassword.css';
import Navbar from "../navbar/Navbar"; // Import Navbar component
import { useNavigate } from "react-router-dom"; // Import useHistory hook

function ChangePassword() {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if new password matches confirm password
        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        // Make API request to change password
        try {
            const userId = localStorage.getItem('userId');
            const response = await fetch(`http://localhost:8080/ecommerce/change-password/${userId}/${newPassword}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // You might need to include authentication headers here if required
                },
                body: JSON.stringify({}),
            });

            if (!response.ok) {
                // Handle error responses from the server
                const errorMessage = await response.text();
                setMessage(`Error: ${errorMessage}`);
                return;
            }

            // Password changed successfully
            setMessage('Password changed successfully!');
            navigate("/login"); // Navigate to login page
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while processing your request');
        }
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="ChangePassword">
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit">Change Password</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}

export default ChangePassword;