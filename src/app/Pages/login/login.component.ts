import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hideContent: boolean;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private service:UserService,
    private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
  });
  }
  get f() { return this.loginForm.controls; }

  togglemyPasswordFieldType(){
    this.hideContent = !this.hideContent;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    let data = {
      "emailId":this.f.email.value,
      "password":this.f.password.value
    }
    this.service.login(data).subscribe((dataReturned:any) =>{ 
      console.log(dataReturned);
     localStorage.setItem("emailId",dataReturned.data.emailId);
     localStorage.setItem("token",dataReturned.data.token);
      this.snackBar.open("Login Successful","Okay")
    })
    
}
}