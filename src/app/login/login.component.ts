import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {ApplicationResponse} from '../shared/app-repsonse.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  minLength = 6;

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(this.minLength)])
    });
  }

  onLogin() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.authService.authenticate(email, password);
    this.authService.getIsAuthenticated()
      .subscribe(isAuthenticated => {
          if (isAuthenticated) {
            this.snackBar.open('Successfully logged in', 'Dismiss', {duration: 3000});
            this.router.navigate(['vote']);
          } else {
            this.snackBar.open(`Authentication failed`, 'Dismiss', {duration: 3000});
          }
        });
  }
}
