import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApplicationResponse} from '../shared/app-repsonse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  private LOGIN_URL = `http://localhost:8080/api/v1/login`;

  private basicAuthToken: string;

  login(email: string, password: string) {
    this.basicAuthToken = btoa(`Basic ${email}:${password}`);

    this.httpClient.get<ApplicationResponse>(`${this.LOGIN_URL}`, {
      headers: new HttpHeaders().set('Authorisation', this.basicAuthToken)
    })
      .subscribe(response => {
        console.log(response);
      },
        err => console.log(err));
  }

  getBasicAuthToken() {
    return this.basicAuthToken;
  }
}
