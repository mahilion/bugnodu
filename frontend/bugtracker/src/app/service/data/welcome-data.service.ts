import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  baseurl = environment.baseUrl;

  constructor(private httpclient: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.httpclient.get<HelloWorldBean>(this.baseurl + `hello-world-bean`);
  }

  executeHelloWorldBeanServicePath(name: string) {
    let headerString = this.createBasicAuthenticationHeader();
    let headers = new HttpHeaders({
      Authorization : headerString
    })
    return this.httpclient.get<HelloWorldBean>(this.baseurl + `hello-world-bean/${name}`,{headers});
  }

  createBasicAuthenticationHeader() {
    let username = "lion";
    let password = "pass";
    let header = "Basic " + window.btoa(username + ":" + password);
    return header;
  }

}
