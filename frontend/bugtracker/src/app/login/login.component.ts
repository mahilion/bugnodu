import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin'
  password = 'admin'
  errormessage = 'Invalid Credentials'
  isInvalidUser = false

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }

  handleLogin() {
    console.log("Logging in :" + this.username)
    if(this.username === 'admin' && this.password === 'admin') {
      // route to welcome page
      this.isInvalidUser = false
      this.router.navigate(['welcome' , this.username])
    } else {
      this.isInvalidUser = true
    }
  }

}
