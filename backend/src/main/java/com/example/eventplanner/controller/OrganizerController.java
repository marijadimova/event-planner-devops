package com.example.eventplanner.controller;


import com.example.eventplanner.model.Organizer;
import com.example.eventplanner.repository.OrganizerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/organizers")
@CrossOrigin
public class OrganizerController {

    @Autowired
    private OrganizerRepository organizerRepository;

    @GetMapping
    public List<Organizer> getAllOrganizers() {
        return organizerRepository.findAll();
    }

    @PostMapping
    public Organizer createOrganizer(@RequestBody Organizer organizer) {
        return organizerRepository.save(organizer);
    }

    @GetMapping("/{id}")
    public Organizer getOrganizerById(@PathVariable String id) {
        return organizerRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteOrganizer(@PathVariable String id) {
        organizerRepository.deleteById(id);
    }
}

