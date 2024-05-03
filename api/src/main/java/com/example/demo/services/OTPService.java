package com.example.demo.services;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class OTPService {

    private Map<String, String> otpMap = new HashMap<>();

    public String generateOTP(String username) {
        String otp = generateRandomOTP();
        otpMap.put(username, otp);
        return otp;
    }

    public boolean validateOTP(String username, String otp) {
        if (otpMap.containsKey(username) && otpMap.get(username).equals(otp)) {
            otpMap.remove(username);
            return true;
        }
        return false;
    }

    private String generateRandomOTP() {
        Random random = new Random();
        int otpValue = 100000 + random.nextInt(900000);
        return String.valueOf(otpValue);
    }
}