import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit  {
  
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

  ngOnInit() {

    this.LoginForm.valueChanges.subscribe({
      next: ((value)=>{
        return  window.localStorage.setItem('LoginData', JSON.stringify(value));
      })
    })
  }

  onSubmit(){
    console.log(this.LoginForm.value);
  }

  get emailValidator(){
    return (
      this.LoginForm.controls.email.touched
      && this.LoginForm.controls.email.dirty &&
      this.LoginForm.controls.email.invalid
    )
  }

  get passwordValidator(){
    return (
      this.LoginForm.controls.password.invalid
      && this.LoginForm.controls.password.touched
    )
  }


}
