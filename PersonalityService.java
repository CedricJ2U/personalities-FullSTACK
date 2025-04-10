package com.lumawig.personality.service;

import com.lumawig.personality.model.Personality;
import com.lumawig.personality.repository.PersonalityRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PersonalityService {

    private final PersonalityRepository repository;

    public PersonalityService(PersonalityRepository repository) {
        this.repository = repository;
    }

    public List<Personality> findAll() {
        return repository.findAll();
    }

    public Personality save(Personality p) {
        return repository.save(p);
    }

    public List<Personality> saveAll(List<Personality> list) {
        return repository.saveAll(list);
    }
}
