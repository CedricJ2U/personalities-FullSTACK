package com.lumawig.personality.controller;

import com.lumawig.personality.model.Personality;
import com.lumawig.personality.service.PersonalityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lumawig/personalities")
@CrossOrigin(origins = "http://localhost:5173")
public class PersonalityController {

    private final PersonalityService service;

    public PersonalityController(PersonalityService service) {
        this.service = service;
    }

    @GetMapping
    public List<Personality> getAll() {
        return service.findAll();
    }

    @PostMapping
    public Personality addPersonality(@RequestBody Personality p) {
        return service.save(p);
    }

    @PostMapping("/bulk")
    public List<Personality> addPersonalities(@RequestBody List<Personality> list) {
        return service.saveAll(list);
    }
}
