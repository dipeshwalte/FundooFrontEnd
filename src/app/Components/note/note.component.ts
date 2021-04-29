import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/Services/UserService/user.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() noteObj:Object;
  colorPalleteShow:boolean = false;
  moreMenuShow:boolean = false;
  showControls:boolean;
  bgColor:string;
  constructor(private service:UserService,
    public dialog:MatDialog) {
    this.showControls = false;
   }
   receiveColor($event:string){
    this.bgColor = $event;
    this.service.updateColor(this.noteObj["noteId"],this.bgColor).subscribe(data =>
      console.log(data));
   }
   openDialog(noteObj:Object){
    this.dialog.open(UpdateNoteComponent,{data:{
      id: noteObj["noteId"],
      title: noteObj["title"],
      body: noteObj["body"]
    }});
  }
   receiveColorPallete($event:boolean){
     this.colorPalleteShow = $event;
   }
   receiveMoreMenu($event:boolean)
   {
     this.moreMenuShow = $event;
   }
   receiveDeleteButtonClick($event)
   {
     this.service.thrashNote(this.noteObj["noteId"]).subscribe(data =>{console.log(data)
     this.service.getNotes().subscribe(data=>console.log(data));
     });
     //window.location.reload();
   }
   receiveArchieveClicked($event)
   {
     this.service.archieveNote(this.noteObj["noteId"]).subscribe(data => 
     {console.log(data)
     console.log("Firing getnotes again");
     this.service.getNotes().subscribe(data=>console.log(data))});
   }
  ngOnInit(): void {
    this.bgColor = this.noteObj["color"];
  }
}
