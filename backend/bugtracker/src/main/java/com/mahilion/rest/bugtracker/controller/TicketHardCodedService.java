package com.mahilion.rest.bugtracker.controller;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.mahilion.rest.bugtracker.entity.Ticket;

@Service
public class TicketHardCodedService {

    public static List<Ticket> tickets = new ArrayList<>();

    static {
        int idCOunter = 1;
        tickets.add(new Ticket(idCOunter++, "Mahesh", "Implement the frontend", new Date(), false));
        tickets.add(new Ticket(idCOunter++, "Mahesh", "Implement the backend", new Date(), false));
        tickets.add(new Ticket(idCOunter++, "Mahesh", "Dockerise the app", new Date(), false));
    }

    public List<Ticket> findAll() {
        return tickets;
    }

    public Ticket deleteById(long id) {
        Ticket ticket = findById(id);
        if (ticket == null) return null;
        if (tickets.remove(ticket)) {
            return ticket;
        }
        return null;
    }

    private Ticket findById(long id) {
        for (Ticket ticket : tickets) {
            if (ticket.getId() == id) {
                return ticket;
            }
        }
        return null;
    }
}
