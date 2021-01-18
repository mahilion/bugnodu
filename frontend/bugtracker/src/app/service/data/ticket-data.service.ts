import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from 'src/app/list-tickets/list-tickets.component';

@Injectable({
  providedIn: 'root'
})
export class TicketDataService {

  constructor(private httpclient: HttpClient) { }

  findAllTickets(username: string) {
    return this.httpclient.get<Ticket[]>(`http://localhost:8080/users/${username}/tickets`);
  }

  deleteTicket(username: string, id: number) {
    return this.httpclient.delete(`http://localhost:8080/users/${username}/tickets/${id}`);
  }

}
