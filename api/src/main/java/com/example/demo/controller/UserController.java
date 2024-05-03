package com.example.demo.controller;

import com.example.demo.model.ForgotPasswordRequest;
import com.example.demo.model.ForgotPasswordResponse;
import com.example.demo.model.RegistrationRequest;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/v1/register")
    public ResponseEntity<String> registerUser(@RequestBody RegistrationRequest user) {
        userService.registerUser(user);
        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
    }

    @PostMapping("/change-password/{userId}/{newPassword}")
    public ResponseEntity<?> changePassword(@PathVariable Long userId, @PathVariable String newPassword) {
        System.out.println("test"+userId);
        System.out.println("test newPassword"+newPassword);

        userService.changePassword(userId, newPassword);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/forgot-password")
    public ForgotPasswordResponse forgotPassword(@RequestBody ForgotPasswordRequest request) {
        // Implement your logic to validate the email and retrieve the corresponding user ID
        // For this example, let's assume a simple validation and return a hardcoded user ID

        Long userId = userService.validateEmailAndGetUserId(request.getEmail());

        ForgotPasswordResponse response = new ForgotPasswordResponse();
        response.setUserId(userId);
        return response;
    }

}