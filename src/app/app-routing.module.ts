import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../app/Pages/register/register.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Pages/ForgotPassword/forgot-password/forgot-password.component';
import { LoginComponent } from './Pages/login/login.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';
import { ArchieveComponent } from './Components/archieve/archieve.component';
import { ThrashComponent} from './Components/thrash/thrash.component';
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'resetPassword/:token',component:ResetPasswordComponent},
  { path: 'dashboard',component:DashboardComponent,children:[
      {path: 'archieve',component:ArchieveComponent},
      {path: 'thrash',component:ThrashComponent}
      ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
