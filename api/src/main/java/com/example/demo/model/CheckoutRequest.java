package com.example.demo.model;

import java.util.List;

public class CheckoutRequest {

    private List<CartItem> cartItems;


    public List<CartItem> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<CartItem> cartItems) {
        this.cartItems = cartItems;
    }
}
