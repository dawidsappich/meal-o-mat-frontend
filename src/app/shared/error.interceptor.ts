import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ApplicationResponse} from '../model/app-repsonse.model';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {

      const response = new ApplicationResponse();
      response.message = err.message;
      response.code = err.status;
      response.date = new Date();
      response.isSuccess = false;

      return throwError(response);
    }));
  }

}
