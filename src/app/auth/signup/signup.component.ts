import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {


  findUsOptions = ['Google', 'Referred by friend', 'Other']



  signupForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(7)
    ]],
    confirmPassword:['',[
      Validators.required,
      Validators.minLength(7)
    ]],


    //Mailing info Subgroup

    mailingInfo: this.fb.group({

    firstName: ['', [
      Validators.required
    ]],
    lastName: ['', [
      Validators.required
    ]],

    street: ['', [
      Validators.required
    ]],
    number: ['', [
      Validators.required
    ]],
    postalCode: ['', [
      Validators.required
    ]],
    city: ['', [
      Validators.required
    ]]
    }),




    //Acquisition info


    acquisition: this.fb.group({

     findUs: this.fb.array(this.findUsOptions.map(()=>{
        return this.fb.control(false);
      })),

      
      role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('student',  [
    ]),

    agreedToTerms: [false, [Validators.requiredTrue]]
  })

  })


  constructor(
    private fb: FormBuilder,
  ){} 



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
     const rawCheckBoxes = this.signupForm.value.acquisition?.findUs as boolean[] | undefined;

    //  const findUsSelection = rawCheckBoxes
    //    ?.map((checked, index) => checked ? this.findUsOptions[index] : null)
    //    .filter((value): value is string => !!value);

     console.log(this.signupForm.value);
  }

  resetForm(){
    this.signupForm.reset();
  }
  
}
