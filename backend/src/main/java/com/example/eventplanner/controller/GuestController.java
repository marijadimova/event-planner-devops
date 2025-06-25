package com.example.eventplanner.controller;


import com.example.eventplanner.model.Guest;
import com.example.eventplanner.repository.GuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/guests")
@CrossOrigin
public class GuestController {

    @Autowired
    private GuestRepository guestRepository;

    @GetMapping
    public List<Guest> getAllGuests() {
        return guestRepository.findAll();
    }

    @PostMapping
    public Guest createGuest(@RequestBody Guest guest) {
        return guestRepository.save(guest);
    }

    @GetMapping("/{id}")
    public Guest getGuestById(@PathVariable String id) {
        return guestRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteGuest(@PathVariable String id) {
        guestRepository.deleteById(id);
    }
}

