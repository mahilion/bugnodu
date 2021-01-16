import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  message = ''

  constructor(private route:ActivatedRoute , private welcomeDataSvc:WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.welcomeDataSvc.executeHelloWorldBeanService().subscribe(
      response => this.handleSucessfulResponse(response),
      error => this.handleError(error)
    );
  }
 
  handleSucessfulResponse(response : HelloWorldBean) {
    this.message = response.message;
  }

  handleError(error) {
    this.message = error.error.message;
  }
}
