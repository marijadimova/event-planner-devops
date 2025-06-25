package com.example.eventplanner.repository;

import com.example.eventplanner.model.Organizer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrganizerRepository extends MongoRepository<Organizer, String> {}