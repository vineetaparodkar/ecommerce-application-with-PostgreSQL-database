package com.example.demo.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;


@Configuration
public class ApplicationProperties {

    @Value("${web.config.allowed-origin-urls}")
    private String[] allowedOriginURLs;

    @Value("${web.config.max-age}")
    private Long maxAge;

    public Long getMaxAge() {
        return maxAge;
    }

    public String[] getAllowedOriginURLs() {
        return allowedOriginURLs;
    }

}
