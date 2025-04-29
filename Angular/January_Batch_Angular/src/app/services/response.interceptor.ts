import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   debugger
    return next.handle(request).pipe(
      tap({
        next: (event: any) => {
          debugger
          if (event instanceof HttpResponse) {
            debugger
            if(event.status == 200) {
              alert('Unauthorized access!') // ERROR SHOW
              throw "error";

            }
          }
          return event;
        },
        error: (error) => {
          if(error.status === 401) {
            alert('Unauthorized access!')
          }
          else if(error.status === 404) {
            alert('Page Not Found!')
          }
          else{
            alert(error);

          }

        }
      }));

  }
}
