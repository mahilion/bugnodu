package com.mahilion.rest.bugtracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mahilion.rest.bugtracker.entity.Ticket;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TicketsResource {

    @Autowired
    TicketHardCodedService m_ticketService;

    @GetMapping("/users/{username}/tickets")
    public List<Ticket> getAllTickets(@PathVariable String username) {
        return m_ticketService.findAll();
    }

    @DeleteMapping("users/{username}/tickets/{id}")
    public ResponseEntity deleteTicket(@PathVariable String username, @PathVariable long id) {
        Ticket ticket = m_ticketService.deleteById(id);
        if (ticket != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
