import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApplicationResponse} from '../model/app-repsonse.model';
import {UiService} from '../shared/ui.service';
import {environment} from '../../environments/environment';
import {Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private basicAuthToken: string;
  private $authenticate: Subscription;

  isAuthenticated: Subject<boolean> = new Subject();
  isRegistered: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient, private uiService: UiService) {
  }

  authenticate(email: string, password: string) {
    // encode username and password in base64 string
    const encodedCredentials = btoa(`${email}:${password}`);
    // save token
    this.basicAuthToken = `Basic ${encodedCredentials}`;
    // authenticate user with http basic auth
    this.$authenticate = this.httpClient.get<ApplicationResponse>(`${environment.API_URL}login`, {
      headers: new HttpHeaders().set('Authorization', this.basicAuthToken)
    })
      .subscribe(response => {
        this.isAuthenticated.next(response.isSuccess);
        this.uiService.createSnackBar(response.message, 'Dismiss', 2000);
      }, (error: ApplicationResponse) => {
        console.log(error.message)
        this.isAuthenticated.next(false);
        this.uiService.createSnackBar('Authentication failed!', 'Dismiss', 2000);
      });
  }

  getBasicAuthToken() {
    return this.basicAuthToken;
  }

  logout() {
    // TODO: logout and implement xrsf token handling provided by spring security
    // TODO: navigate to login page after successful logout
  }

  register(email: string, password: string) {
    const credentials = {email, password};
    this.httpClient.post<ApplicationResponse>(`${environment.API_URL}register`, credentials)
      .subscribe(response => {
          this.isRegistered.next(response.isSuccess);
          this.uiService.createSnackBar(response.message, 'Dismiss', 2000);
        }, (error: ApplicationResponse) => {
          this.isRegistered.next(false);
          this.uiService.createSnackBar(error.message, 'Dismiss', 2000);
        }
      );
  }

  ngOnDestroy(): void {
    this.$authenticate ? this.$authenticate.unsubscribe() : this.$authenticate = null;
  }

}
