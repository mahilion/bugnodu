package com.mahilion.rest.bugtracker.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

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

    @GetMapping("/users/{username}/tickets/{id}")
    public Ticket getTicket(@PathVariable String username, @PathVariable long id) {
        return m_ticketService.findById(id);
    }

    @DeleteMapping("users/{username}/tickets/{id}")
    public ResponseEntity deleteTicket(@PathVariable String username, @PathVariable long id) {
        Ticket ticket = m_ticketService.deleteById(id);
        if (ticket != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("users/{username}/tickets/{id}")
    public ResponseEntity<Ticket> updateTicket(@PathVariable String username, @PathVariable long id, @RequestBody Ticket ticket) {
        Ticket savedTicket = m_ticketService.save(ticket);
        return new ResponseEntity<Ticket>(ticket , HttpStatus.OK);
    }

    @PostMapping("users/{username}/tickets")
    public ResponseEntity<Ticket> saveTicket(@PathVariable String username, @RequestBody Ticket ticket) {
        Ticket savedTicket = m_ticketService.save(ticket);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedTicket.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
