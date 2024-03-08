import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  errorMessage = '';
  pageTitle = 'Log In';

  constructor(private router: Router, private authService: AuthService) { }

  login(loginForm: NgForm): void {
    if (loginForm == null || !loginForm.valid) {
      this.errorMessage = 'Please enter a user name and password.';
      return;
    }
    const userName = loginForm.form.value.userName;
    const password = loginForm.form.value.password;
    this.authService.login(userName, password);
    // Navigate to the Product List page after log in.
    if (this.authService.redirectUrl) {
      this.router.navigateByUrl(this.authService.redirectUrl);
    }else{
      this.router.navigate(['/products']);
    }
  }
}
