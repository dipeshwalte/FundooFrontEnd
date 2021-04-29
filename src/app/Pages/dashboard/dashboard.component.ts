import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/UserService/user.service';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import {CreateNoteComponent} from 'src/app/Components/create-note/create-note.component'
import {Router,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  header:any;
  titleVar:string = "Hello";
  bodyVar:string = "Hi";
  hideSignOut:boolean = false;
  submitted = false;
  sidebarOpened:boolean = true;
  
  notesArray:any ;
  
  constructor(private service:UserService,
    //public dialog:MatDialog
    public dialog:MatDialog,
    private router:Router,
    private acRoute:ActivatedRoute
    ) { }
  
  ngOnInit(): void {
      this.service.getNotes().subscribe((dataReturned:any) =>{ 
      this.notesArray = dataReturned.data.reverse();
    })
  }
  openDialog(noteObj:Object){
    this.dialog.open(CreateNoteComponent,{data:{
      title: noteObj["title"],
      body: noteObj["body"]
    }});
  }
 
 showArchieve(){
   this.router.navigate(['archieve'],{relativeTo:this.acRoute});
 }
 trashNotes(){
   this.router.navigate(['thrash'],{relativeTo:this.acRoute});
 }
 homeClicked()
  {this.router.navigate(['notes'],{relativeTo:this.acRoute});}
}


