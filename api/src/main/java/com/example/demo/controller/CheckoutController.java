package com.example.demo.controller;

import com.example.demo.model.CheckoutRequest;
import com.example.demo.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


// CheckoutController.java
@RestController
public class CheckoutController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/checkout")
    public String checkout(@RequestBody CheckoutRequest checkoutRequest) {
        orderService.processOrder(checkoutRequest);
        return "Order placed successfully!";
    }
}

