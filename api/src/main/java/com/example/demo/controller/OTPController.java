package com.example.demo.controller;

import com.example.demo.services.OTPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OTPController {

    @Autowired
    private OTPService otpService;

    @PostMapping("/generate-otp/{username}")
    public ResponseEntity<String> generateOTP(@PathVariable String username) {
        String otp = otpService.generateOTP(username);
        return new ResponseEntity<>(otp, HttpStatus.OK);
    }

    @PostMapping("/validate-otp")
    public ResponseEntity<String> validateOTP(@RequestParam String username, @RequestParam String otp) {
        boolean isValid = otpService.validateOTP(username, otp);
        if (isValid) {
            return new ResponseEntity<>("OTP is valid", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid OTP", HttpStatus.UNAUTHORIZED);
        }
    }
}