import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';

/**
 * interceptor for requests to set the Authorisation header
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // by default the req is immutable, so we have to work with a clone and update the header
    const httpRequest = req.clone({headers: req.headers.set('Authorisation', this.authService.getBasicAuthToken())});
    // continue with the request
    return next.handle(httpRequest);
  }

}
