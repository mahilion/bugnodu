import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpclient: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.httpclient.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
  }

  executeHelloWorldBeanServicePath(name: string) {
    let headerString = this.createBasicAuthenticationHeader();
    let headers = new HttpHeaders({
      Authorization : headerString
    })
    return this.httpclient.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`,{headers});
  }

  createBasicAuthenticationHeader() {
    let username = "lion";
    let password = "pass";
    let header = "Basic " + window.btoa(username + ":" + password);
    return header;
  }

}
