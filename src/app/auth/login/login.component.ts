import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  
  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    })
  })

  onSubmit()
{
  console.log(this.loginForm.value)
}

get emailValidators()
{
  return(
    this.loginForm.controls.email.touched &&
   this.loginForm.controls.email.invalid
   );
}

get passwordValidators(){
  return this.loginForm.controls.password.touched
   && this.loginForm.controls.password.invalid
   && this.loginForm.controls.password.dirty;
}


}
