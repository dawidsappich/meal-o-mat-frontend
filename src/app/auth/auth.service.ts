import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApplicationResponse} from '../model/app-repsonse.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isRegistered: Subject<boolean>;

  private isAuthenticated: Subject<boolean>;

  private basicAuthToken: string;

  private applicationResponse: ApplicationResponse;

  private API_URL = `http://localhost:8080/api/v1/`;

  constructor(private httpClient: HttpClient) {
    this.isRegistered = new Subject<boolean>();
    this.isAuthenticated = new Subject<boolean>();
  }

  authenticate(email: string, password: string) {
    const encodedCredentials = btoa(`${email}:${password}`);
    this.basicAuthToken = `Basic ${encodedCredentials}`;

    this.httpClient.get<ApplicationResponse>(`${this.API_URL}login`, {
      headers: new HttpHeaders().set('Authorization', this.basicAuthToken)
    })
      .subscribe(response => {
        if (response.isSuccess) {
          this.isAuthenticated.next(true);
        } else {
          this.isAuthenticated.next(false);
        }
      });
  }

  getBasicAuthToken() {
    return this.basicAuthToken;
  }

  getIsAuthenticated(): Subject<boolean> {
    return this.isAuthenticated;
  }

  getIsRegistered(): Subject<boolean> {
    return this.isRegistered;
  }

  logout() {
    // TODO: logout and implement xrsf token handling provided by spring security
    // TODO: navigate to login page after successful logout
  }

  register(email: string, password: string) {
    const credentials = {email, password};
    this.httpClient.post<ApplicationResponse>(`${this.API_URL}register`, credentials)
      .subscribe(response => {
          this.applicationResponse = response;
          if (response.isSuccess) {
            this.isRegistered.next(true);
          } else {
            this.isRegistered.next(false);
          }
        }, (error: ApplicationResponse) => {
          this.applicationResponse = error;
          this.isRegistered.next(false);
        }
      );
  }

  getAuthenticationResponse() {
    return this.applicationResponse;
  }

  getApiUrl() {
    return this.API_URL;
  }
}
