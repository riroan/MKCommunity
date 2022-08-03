package com.example.backend.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.backend.dto.MessageDTO;

@RestController
@RequestMapping("/api")
public class ApiController {
    @GetMapping("")
    public String hello() {
        return "Hello";
    }
    
    @PostMapping("/write")
    public MessageDTO write(@RequestBody MessageDTO message) {
        System.out.println(message);
        return message;
    }

}

