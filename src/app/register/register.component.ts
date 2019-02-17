import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFrom: FormGroup;
  minLength = 6;

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.registerFrom = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }


  onRegister() {
    const email = this.registerFrom.get('email').value;
    const password = this.registerFrom.get('password').value;
    this.authService.register(email, password);
    this.authService.getIsRegistered()
      .subscribe(isRegistered => {
        if (isRegistered) {
          this.snackBar.open('Successfully registered', 'Dismiss', {duration: 3000});
          setTimeout(() => this.router.navigate(['login']), 1500);
        } else {
          const response = this.authService.getAuthenticationResponse();
          this.snackBar.open(response.message, 'Dismiss', {duration: 3000});
        }
      });
  }
}
