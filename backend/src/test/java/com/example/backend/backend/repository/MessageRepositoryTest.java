package com.example.backend.backend.repository;

import java.util.List;

import org.assertj.core.util.Lists;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.backend.backend.domain.Message;

@SpringBootTest
public class MessageRepositoryTest {
    @Autowired
    private MessageRepository messageRepository;

    @BeforeEach
    void before() {
        Message message1 = new Message("title1", "content1");
        Message message2 = new Message("title2", "content2");
        Message message3 = new Message("title3", "content3");
        Message message4 = new Message("title4", "content4");
        messageRepository.saveAll(Lists.newArrayList(message1, message2, message3, message4));
    }

    @Test
    void test1() {
        // System.out.println("Hello world");
        List<Message> messages = messageRepository.findAll();
        messages.forEach(System.out::println);
    }
}
