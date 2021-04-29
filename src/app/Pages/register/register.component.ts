import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserService } from '../../Services/UserService/user.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hideContent: boolean;
  submitted = false;
  //firstName = "First name";
  lastName = "Last name";
  emailId = "Email Id";
  password = "Password";
  confirm = "Confirm";
  constructor(
    private formBuilder: FormBuilder,
    private service:UserService,
    private snackBar:MatSnackBar) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      });

     // this.refreshPeople();
  }

  // refreshPeople(){
     
  // }
  // // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  togglemyPasswordFieldType(){
    this.hideContent = !this.hideContent;
  }
  
  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      let data = {
        "firstName": this.f.firstName.value,
        "lastName":this.f.lastName.value,
        "email":this.f.email.value,
        "password":this.f.password.value
      }
      this.service.registration(data).subscribe(data => {
        console.log(data);
        this.snackBar.open("Registration Successful","Exit")
      })
  }
}