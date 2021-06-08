import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username = "lion";
    let password = "pass";
    let header = "Basic " + window.btoa(username + ":" + password);

    req = req.clone({
      setHeaders: {
        Authorization: header
      }
    })

    return next.handle(req);
  }

}
