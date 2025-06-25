package com.example.eventplanner.repository;


import com.example.eventplanner.model.Guest;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GuestRepository extends MongoRepository<Guest, String> {}