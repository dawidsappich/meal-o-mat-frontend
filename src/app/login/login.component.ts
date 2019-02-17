import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private $authenticated: Subscription;
  loginForm: FormGroup;
  minLength: number;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.minLength = 6;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(this.minLength)])
    });
  }

  onLogin() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.authService.authenticate(email, password);
    this.$authenticated = this.authService.isAuthenticated.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/vote']);
      }
    });
  }

  ngOnDestroy(): void {
    this.$authenticated ? this.$authenticated.unsubscribe() : this.$authenticated = null;
  }
}
