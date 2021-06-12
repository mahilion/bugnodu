package com.mahilion.rest.bugtracker.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mahilion.rest.bugtracker.entity.Helloworld;

@CrossOrigin(origins = "https://bugnodu-ui.herokuapp.com")
@RestController
public class HelloWorldController {

    @GetMapping(path = "/hello-world")
    public String helloWorld() {
        return "Hello-World";
    }

    @GetMapping(path = "/hello-world-bean")
    public Helloworld helloWorldBean() {
        return new Helloworld("Mahesh");
    }

    @GetMapping(path = "/hello-world-bean/{name}")
    public Helloworld helloWorldBean(@PathVariable String name) {
        return new Helloworld(name);
    }
}
