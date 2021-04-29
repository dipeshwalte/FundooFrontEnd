import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  takeNoteExpanded:boolean = false;
  notesArray:any;
  constructor(private service:UserService) { }

  getNotes(){
    this.service.getNotes().subscribe((dataReturned:any) =>{ 
      this.notesArray = dataReturned.data.reverse();
    })
  }
  ngOnInit(): void {
    this.getNotes();
  }
  receiveCloseClick($event:boolean){
    this.takeNoteExpanded = $event;
  }
  refreshPage(){
    this.getNotes();
  }
}
