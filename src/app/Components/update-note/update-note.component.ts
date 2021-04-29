import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Input, NgZone, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData{
  id:0,
  title: "",
  body: ""
}



@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  bgColor:string;
  createNoteForm: FormGroup;
  hideShowColorPalette:boolean;
  constructor(private formBuilder: FormBuilder,
    private service:UserService,
    private snackBar:MatSnackBar,
    private _ngZone: NgZone,
    @Inject(MAT_DIALOG_DATA) public data:DialogData
    ) { }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit(): void {
    this.createNoteForm = this.formBuilder.group({
      title: ['', [Validators.maxLength(200),Validators.minLength(1)]],
      noteText: ['', [Validators.maxLength(400)]]
  });
  
  
  }
  get f() { return this.createNoteForm.controls; }

  receiveColor($event:string){
    console.log("I received color")
    this.bgColor = $event;
  }
  @Output() closeClickEvent = new EventEmitter<boolean>();
  createNote() {
    //this.takeNoteExpanded = false;
    //this.submitted = true;
    this.closeClickEvent.emit(false);
    // if (this.createNoteForm.invalid) {
    //     return;
    // }
    if(this.f.title.value=="")
    {
      return;
    }
    let data2 = {
      "noteId":this.data.id,
      "title": this.f.title.value,
      "body": this.f.noteText.value,
    }
    
    this.service.updateNote(data2).subscribe(data =>{ 
      console.log(data);
      this.service.getNotes();
      //window.location.reload();
      //this.snackBar.open("Note Created","Okay")
    })
}

}
