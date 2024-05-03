package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.model.LoginRequest;
import com.example.demo.services.AuthService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.instanceOf;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

@RunWith(JUnit4.class)
public class AuthControllerTest {

    @Mock
    private AuthService authService;

    @InjectMocks
    private AuthController authController;

    private AutoCloseable closeable;

    @BeforeEach
    public void setup() {
        closeable = MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testLogin() throws Exception {
        // Mock request parameters
        String username = "testUser";
        String password = "testPassword";
        String otp = "testPassword";

        // Create a user object for mocking
        User user = new User();
        user.setUserName(username);
        user.setPassword(password);

        // Mocking userService behavior
        when(authService.authenticateUser(username, password, otp)).thenReturn(user);

        // Call the login method on the controller
        LoginRequest loginRequest = new LoginRequest(username, password, otp);
        ResponseEntity<String> responseEntity = authController.loginUser(loginRequest);

        // Verify that the userService login method was called with the correct parameters
        verify(authService).authenticateUser(username, password, otp);

        // Verify that the response entity is not null
        assertNotNull(responseEntity);

        // Verify that the response status is OK (200)
        assertThat("Unexpected HTTP Status Code", responseEntity.getStatusCode(), equalTo(HttpStatus.OK));

        // Extract the user from the response entity
        Object body = responseEntity.getBody();
        assertThat("Unexpected Body Type", body, instanceOf(String.class));
        String response = (String) body;

        // Verify that the extracted user matches the mocked user
        assertThat("Extracted user does not match the mocked user.", response, equalTo("Login successful"));
    }

    @AfterEach
    public void tearDown() throws Exception {
        closeable.close();
    }
}