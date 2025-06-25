package com.example.eventplanner.repository;

import com.example.eventplanner.model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EventRepository extends MongoRepository<Event, String> {}