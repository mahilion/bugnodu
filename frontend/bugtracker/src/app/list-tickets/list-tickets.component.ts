import { Component, OnInit } from '@angular/core';

export class Ticket {

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public createdDate: Date,
    public done: boolean
  ) {}
}


@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  tickets = [
    new Ticket(1, 'Implement the frontend','Use Angular to implement', new Date(), false),
    new Ticket(2, 'Implement the backend','Use spring boot', new Date(), false),
    new Ticket(3, 'Dockerise the app','Use Docker', new Date(), false)
  ]

  constructor() { }

  ngOnInit() {
  }

}
