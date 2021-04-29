import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Input, NgZone, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';




@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  bgColor:string;
  createNoteForm: FormGroup;
  hideShowColorPalette:boolean;
  constructor(private formBuilder: FormBuilder,
    private service:UserService,
    private snackBar:MatSnackBar,
    private _ngZone: NgZone,
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
    let data = {
      "title": this.f.title.value,
      "body": this.f.noteText.value,
      "image": "",
      "color": "white",
      "reminder": "2021-04-21T07:25:57.428Z",
      "isPin": false,
      "isArchieve": false,
      "isTrash": false,
      "collaborators": [
      ],
      "labels": [
      ]
    }
    
    this.service.createNote(data).subscribe(data =>{ 
      console.log(data);
       this.service.getNotes();
      //window.location.reload();
      //this.snackBar.open("Note Created","Okay")
    })
}

}
