package com.friendapp.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class HelloController {

    @GetMapping("/qwe")
    public String hello() {
        return "hello";
    }

    @PostMapping("/user/register")
    public String test(HttpServletRequest request) {
        return "hello";
    }
}
