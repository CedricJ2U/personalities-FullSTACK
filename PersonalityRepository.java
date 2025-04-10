package com.lumawig.personality.repository;

import com.lumawig.personality.model.Personality;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalityRepository extends JpaRepository<Personality, Long> {
}
