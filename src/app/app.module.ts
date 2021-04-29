import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { FormInputComponent } from './Components/form-input/form-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ButtonComponent } from './Components/button/button.component';
import { MatButton } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckboxComponent } from './Components/checkbox/checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ForgotPasswordComponent } from './Pages/ForgotPassword/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { IconsPanelComponent } from './Components/icons-panel/icons-panel.component';
// import { UpdateNoteComponent} from './Components/'
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { NoteComponent } from './Components/note/note.component';
import { ColorPalleteComponent } from './Components/color-pallete/color-pallete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MoreMenuComponent } from './Components/more-menu/more-menu.component';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import { NotesComponent } from './Components/notes/notes.component';
import { ArchieveeComponent } from './Components/archievee/archievee.component';
import { TrashComponent } from './Components/trash/trash.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FormInputComponent,
    ButtonComponent,
    CheckboxComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    IconsPanelComponent,
    CreateNoteComponent,
    NoteComponent,
    ColorPalleteComponent,
    MoreMenuComponent,
    UpdateNoteComponent,
    NotesComponent,
    ArchieveeComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    //MatDialog,
  //  MatFormField,
  // MatCheckboxModule,
  //  MatCheckbox,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    //MatButton,
// MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
