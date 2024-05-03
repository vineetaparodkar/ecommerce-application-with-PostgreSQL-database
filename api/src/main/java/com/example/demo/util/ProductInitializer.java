package com.example.demo.util;

import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;
import com.example.demo.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class ProductInitializer implements ApplicationRunner {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // Add pre-defined products
        Product product1 = new Product("iPhone 9", "An apple mobile which is nothing like apple", 549, "https://tse1.mm.bing.net/th?id=OIP.nLi2A0Beu5RPL7TTAaH2mQHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120");
        productRepository.save(product1);

        Product product2 = new Product("Samsung Galaxy S21 Ultra", "Samsung's flagship smartphone with a stunning display", 1149, "https://tse1.mm.bing.net/th?id=OIP.3iRYOSf6W5lk-EcweYMnAwHaHY&pid=Api&rs=1&c=1&qlt=95&w=119&h=118");
        productRepository.save(product2);
        // Add more products as needed

        Product product3 = new Product("Sony Xperia 5 III", "Sony Xperia 5 III offers a compact form factor", 1234, "https://tse1.mm.bing.net/th?id=OIP.Z2TP6dRaVSDkIW9-K8VJPgHaE7&pid=Api&rs=1&c=1&qlt=95&w=179&h=119");
        productRepository.save(product3);

        Product product4 = new Product("LG Velvet 5G", "LG Velvet 5G features a unique design.", 4563, "https://tse1.mm.bing.net/th?id=OIP.6BmjzAUIAlXN_sCJ0PbJkgHaHa&pid=Api&rs=1&c=1&qlt=95&w=99&h=99");
        productRepository.save(product4);

        Product product5 = new Product("Xiaomi Mi 11", "Xiaomi Mi 11 offers high-end specs and a vibrant AMOLED display.", 6785, "https://tse1.mm.bing.net/th?id=OIP.JE26VTPKF-E4rYaYjZXOrgHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121");
        productRepository.save(product5);
    }
}
