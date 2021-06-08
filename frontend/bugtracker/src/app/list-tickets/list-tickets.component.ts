import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketDataService } from '../service/data/ticket-data.service';

export class Ticket {

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public targetDate: Date,
    public done: boolean
  ) {}
}


@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  // tickets = [
  //   new Ticket(1, 'Implement the frontend','Use Angular to implement', new Date(), false),
  //   new Ticket(2, 'Implement the backend','Use spring boot', new Date(), false),
  //   new Ticket(3, 'Dockerise the app','Use Docker', new Date(), false)
  // ]

  tickets: Ticket[]
  message: string

  constructor(private ticketService: TicketDataService,
    private router: Router) { }

  ngOnInit() {
    this.refreshTickets();
  }

  private refreshTickets() {
    this.ticketService.findAllTickets('Mahesh').subscribe(
      response => {
        console.log(response);
        this.tickets = response;
      }
    );
  }

  deleteTicket(id: number) {
    console.log(`deleting ticket ${id}`);
    this.ticketService.deleteTicket('Mahesh', id).subscribe(
      response => {
        console.log(response);
        this.message = `Successfully deleted the ticket ${id}`;
        this.refreshTickets();
      }
    );
  }

  updateTicket(id: number) {
    console.log(`Update ticket ${id}`);
    this.router.navigate(["tickets",id]);
  }

  createTicket() {
    console.log("Creating ticket");
    this.router.navigate(["tickets",-1]);
  }

}
