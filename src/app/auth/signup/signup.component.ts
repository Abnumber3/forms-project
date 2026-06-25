import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {

  signupForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],

    password: ['', [
      Validators.required,
      Validators.minLength(5)
    ]]
  })


  constructor(private fb: FormBuilder){} 



  get emailValidators(){
    return(
      this.signupForm.controls.email.touched &&
      this.signupForm.controls.email.dirty &&
      this.signupForm.controls.email.invalid
    )
  }

  get passwordValidators(){

    return(
        this.signupForm.controls.password.invalid &&
        this.signupForm.controls.password.touched
    )
  }




  signUp(){
     console.log(this.signupForm.value);
  }

  resetForm(){
    this.signupForm.reset();
  }
  
}
