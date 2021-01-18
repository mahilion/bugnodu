import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../list-tickets/list-tickets.component';
import { TicketDataService } from '../service/data/ticket-data.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  id: number
  ticket: Ticket


  constructor(private route: ActivatedRoute,
    private ticketService: TicketDataService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.ticket = new Ticket(0,'','',new Date(),false);
    console.log(`id is :${this.id}`);
    this.ticketService.getTicket("Mahesh", this.id).subscribe(
      response => {
        this.ticket = response
      }
    );
  }

  saveTicket() {
    console.log(`Saving ticket ${this.id}`)
    this.ticketService.updateTicket('Mahesh' , this.id , this.ticket).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["tickets"]);
      }
    )
  }

}
