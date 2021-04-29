import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  hide:boolean = true;
  hidePwd: boolean = true;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private service:UserService,
    private snackBar:MatSnackBar,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
  });
  }

  get f() { return this.resetPasswordForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.resetPasswordForm.invalid) {
        return;
    }
    let data = 
      {
        "newPassword": this.f.password.value,
        "confirmNewPassword": this.f.confirmPassword.value,
        "token": this.activatedRoute.snapshot.paramMap.get("token")
      }
    this.service.resetPassword(data).subscribe(data =>{ 
      console.log(data);
      this.snackBar.open("New Password set successfully","Okay")
    })
}
}
