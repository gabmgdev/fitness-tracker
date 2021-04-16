import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', {
        validators: [Validators.required, Validators.email]
      }],
      password: ['', {
        validators: [Validators.required]
      }]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm);
  }

  get emailFormControlError(): string {
    const emailFormControl = this.loginForm.get('email');
    if (emailFormControl.hasError('required')) {
      return 'This field is required';
    }
    if (emailFormControl.hasError('email')) {
      return 'Please enter a valid email';
    }
    return '';
  }

  get passwordFormControlError(): string {
    const passwordFormControl = this.loginForm.get('password');
    if (passwordFormControl.hasError('required')) {
      return 'This field is required';
    }
    return '';
  }
}
