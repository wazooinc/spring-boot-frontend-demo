package com.example.springbootfrontenddemo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;


@Controller
public class HomeController {

    @GetMapping("/")
    public String getHome(Model model) {
        model.addAttribute("message", "yoda");

        ArrayList ships = new ArrayList<String>();
        ships.add("Adjudicator");
        ships.add("Avenger");
        ships.add("Bellicose");
        ships.add("Courageous");
        ships.add("Intrepid");

        model.addAttribute("data", ships);

        return "index";
    }
}
