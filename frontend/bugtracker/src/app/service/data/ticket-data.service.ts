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

  getTicket(username: string, id: number) {
    console.log(`getting ticket : name is ${username} and id is ${id}`);
    return this.httpclient.get<Ticket>(`http://localhost:8080/users/${username}/tickets/${id}`);
  }

  updateTicket(username: string, id: number, ticket: Ticket) {
    console.log(`updating ticket : name is ${username} and id is ${id}`);
    return this.httpclient.put(`http://localhost:8080/users/${username}/tickets/${id}`, ticket);
  }

  createTicket(username: string, ticket: Ticket) {
    console.log(`creating ticket : name is ${username}`);
    return this.httpclient.post(`http://localhost:8080/users/${username}/tickets`, ticket);
  }

}
