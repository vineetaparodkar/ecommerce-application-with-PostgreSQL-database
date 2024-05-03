package com.example.demo.services;

import com.example.demo.entity.User;
import com.example.demo.model.RegistrationRequest;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User registerUser(RegistrationRequest request) {

        // Encrypt password before saving
        User user = new User();
        user.setEmail(request.getEmail());
        user.setFirstName(request.getFirstName());
        user.setUserName(request.getUserName());
        user.setPassword(request.getPassword());
        user.setLastName(request.getLastName());
        user.setPhoneNumber(request.getPhoneNumber());
        user.setShippingAddress(request.getShippingAddress());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        return userRepository.save(user);
    }

    public void changePassword(Long userId, String newPassword) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setPassword(passwordEncoder.encode(newPassword));
            userRepository.save(user);
        } else {
            // Handle user not found error
            throw new RuntimeException("User not found with id: " + userId);
        }
    }

    public Long validateEmailAndGetUserId(String email) {
        // Your logic to validate the email and retrieve the user ID
        // This could involve querying a database or checking against a list of registered users
        // For this example, let's return a hardcoded user ID if the email is valid
        System.out.println("test email" + email);
        Optional<User> userOptional = userRepository.findByEmail(email);
        System.out.println("test email" + userOptional.isPresent());

        if (userOptional.isPresent()) {
            // Example logic:
//            if (userOptional.get().getEmail().equals(email)) {
            return userOptional.get().getId(); // Hardcoded user ID for example@example.com
//            } else {
//                return null; // Return null if email is not found or not valid
//            }
        }
        return null;
    }
}

