package com.example.demo.controller;

import com.example.demo.model.CheckoutRequest;
import com.example.demo.services.OrderService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class CheckoutControllerTest {

    @Mock
    private OrderService orderService;

    @InjectMocks
    private CheckoutController checkoutController;

    @Test
    void getOrders_shouldReturnOrdersList() {
        List<String> orders = List.of("Order1", "Order2", "Order3");

        String response = checkoutController.checkout(new CheckoutRequest());

        assertNotNull(orders, response);

    }
}