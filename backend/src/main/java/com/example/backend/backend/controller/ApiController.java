package com.example.backend.backend.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.backend.domain.Message;
import com.example.backend.backend.dto.MessageDTO;
import com.example.backend.backend.repository.MessageRepository;

@RestController
@RequestMapping("/api")
public class ApiController {
    @Autowired
    MessageRepository messageRepository;
    
    @PostMapping("/write")
    public MessageDTO write(@RequestBody MessageDTO message) {
        Message msg = new Message();
        msg.setTitle(message.getTitle());
        msg.setContent(message.getContent());
        msg.setCreatedAt(LocalDateTime.now());
        messageRepository.save(msg);
        return message;
    }

    @GetMapping("/msg")
    public List<Message> get() {
        List<Message> result = messageRepository.findAll();
        return result;
    }
}

