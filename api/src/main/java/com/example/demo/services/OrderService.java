package com.example.demo.services;

import com.example.demo.entity.Order;
import com.example.demo.entity.Product;
import com.example.demo.model.CartItem;
import com.example.demo.model.CheckoutRequest;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    public void processOrder(CheckoutRequest checkoutRequest) {
        double totalAmount = 0;
        for (CartItem cartItem : checkoutRequest.getCartItems()) {
            Product product = productRepository.findById(cartItem.getProductId()).orElseThrow(() -> new IllegalArgumentException("Product not found"));
            totalAmount += product.getPrice() * cartItem.getQuantity();
            Order order = new Order();
            order.setProductId(product.getId());
            order.setQuantity(cartItem.getQuantity());
            order.setTotalPrice(totalAmount);
            orderRepository.save(order);
        }
        System.out.println(orderRepository.findAll());
    }
}

