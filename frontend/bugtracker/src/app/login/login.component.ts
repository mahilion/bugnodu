import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errormessage = 'Invalid Credentials'
  isInvalidUser = false

  constructor(private router: Router, private hardcodedAuthenticate: HardcodedAuthenticationService) { 
    
  }

  ngOnInit() {
  }

  handleLogin() {
    console.log("Logging in :" + this.username)
    if(this.hardcodedAuthenticate.authenticate(this.username, this.password)) {
      // route to welcome page
      this.isInvalidUser = false
      this.router.navigate(['welcome' , this.username])
    } else {
      this.isInvalidUser = true
    }
  }

}
