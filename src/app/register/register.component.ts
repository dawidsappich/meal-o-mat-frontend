import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  private $registered: Subscription;

  registerFrom: FormGroup;
  minLength = 6;

  constructor(private authService: AuthService, private router: Router) {
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
    this.$registered = this.authService.isRegistered.subscribe(isRegisterd => {
      if (isRegisterd) {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnDestroy(): void {
    this.$registered ? this.$registered.unsubscribe() : this.$registered = null;
  }
}
