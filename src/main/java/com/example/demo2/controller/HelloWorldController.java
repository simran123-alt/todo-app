package com.example.demo2.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HelloWorldController {
    @GetMapping(path="/hello-world")
    public String helloWorld(){
        return "Hello World";
    }
    /*
    @GetMapping(path="/hello-world-bean")
    public HelloWoldBean helloWorldBean(){
        return new HelloWoldBean("Hello World");
    }
    @GetMapping(path="/hello-world/path-variable/{name}")
    public HelloWoldBean helloWorldPathVariable(@PathVariable String name){
        return new HelloWoldBean(String.format("Hello World,%s",name));
    }

     */

}
