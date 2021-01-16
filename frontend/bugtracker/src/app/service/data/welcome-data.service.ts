import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpclient:HttpClient) { }

  executeHelloWorldBeanService() {
    return this.httpclient.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
  }

}
