import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  hideContent: boolean;
  submitted = false;
  token:string;
  constructor(private formBuilder: FormBuilder,
    private service:UserService,
    private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required]]
  });
  }
  get f() { return this.forgotPasswordForm.controls; }

  togglemyPasswordFieldType(){
    this.hideContent = !this.hideContent;
  }
  onSubmit() {
    this.submitted = true;
    if (this.forgotPasswordForm.invalid) {
        return;
    }
    let data = {
      "emailId":this.f.email.value,
    }
    this.service.forgotPassword(data).subscribe(data =>{ 
      console.log(data);
      this.snackBar.open("Reset link is sent to your email","Okay")
    })
}
}
