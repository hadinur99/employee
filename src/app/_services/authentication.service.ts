import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface LoginForm {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedIn = false;

  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  login(loginForm: LoginForm): boolean {
    if (loginForm.username === 'admin' && loginForm.password === 'admin') {
      this.loggedIn = true;
      this.router.navigate(['/employee-list']);
      return true;
    } else {
      this._snackBar.open('Password Salah!', 'Coba Lagi!', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000,
      });
      this.loggedIn = false;
      return false;
    }
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
