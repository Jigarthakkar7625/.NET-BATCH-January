import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    debugger

    if (localStorage.getItem("Token")) {

      const cloneReq = request.clone({
        setHeaders: {
          "Authentication": "Bearer " + localStorage.getItem("Token")
        }
      })
      return next.handle(cloneReq);
    }
    else {
      return next.handle(request);
    }


   
  }
}

// Req -> API Call > RequestInterceptor CALLED >> API CALL .NET
