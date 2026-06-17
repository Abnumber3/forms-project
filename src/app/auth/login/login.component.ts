import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';






@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  
  LoginForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['',[
      Validators.required,
      Validators.minLength(6)
    ]]
  })

  constructor(private fb: FormBuilder) { }

  onSubmit(){
    console.log(this.LoginForm.value);
  }

  get emailValidator(){
    return (
      this.LoginForm.controls.email.invalid
      && this.LoginForm.controls.email.touched
    )
  }

  get passwordValidator(){
    return (
      this.LoginForm.controls.password.invalid
      && this.LoginForm.controls.password.touched
    )
  }


}
