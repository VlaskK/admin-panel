import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from '../types';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiButtonModule, TuiErrorModule, TuiHintModule } from '@taiga-ui/core';
import {
  TuiCheckboxLabeledModule,
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiIslandModule
} from '@taiga-ui/kit';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TuiErrorModule, TuiInputModule, TuiFieldErrorPipeModule, TuiHintModule, TuiInputPasswordModule, TuiButtonModule, TuiIslandModule, TuiCheckboxLabeledModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
})
export class LoginComponent {
  loginFormModel: Login = {
    username: "",
    password: ""
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  loginForm = this.fb.group({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    remember: new FormControl(null, [Validators.required]),
  });

  login() {
    console.log(123);
    // this.authService.login()
  }

  logout() {
    this.authService.logOut();
  }

}
