import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // username: string = '';
  // password: string = '';

  loginForm!: FormGroup;

  isLoading = false;
  errorMessage = '';

  showToast = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {}

  $unSubscribe = new Subject();

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onLogin() {
    this.authService.login(this.loginForm.value);
  }
}
