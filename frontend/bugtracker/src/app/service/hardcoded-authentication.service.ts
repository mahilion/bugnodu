import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    //user still remains intact , seems bug. need to clear.
    console.log('before' + this.isUserLoggedIn());
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('authenticatedUser' , username)
      console.log('after' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let authenticatedUser = sessionStorage.getItem('authenticatedUser')
    return !(authenticatedUser === null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

}
