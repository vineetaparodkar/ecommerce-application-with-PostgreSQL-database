package com.example.demo.services;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private OTPService otpService;

    public User authenticateUser(String username, String password, String otp) {

        Optional<User> user = userRepository.findByUserName(username);

        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword()) && validateOTP(username, otp)) {
            return user.get();
        }
        return null;
    }

    private boolean validateOTP(String username, String otp) {
        boolean response = otpService.validateOTP(username, otp);
        return response;
    }
}