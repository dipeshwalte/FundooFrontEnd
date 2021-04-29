import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archieve',
  template: `
    <p>I am inserting archieve here</p>
   <div class="createdNotes">
          <div class="note" *ngFor="let noteObj of notesArray">
            <div class="handleArchieve" *ngIf='noteObj["isArchieve"]===false'></div>
            <app-note [noteObj]=noteObj></app-note>
            <!-- <app-note [noteObj]=noteObj (click)="openDialog(noteObj)"></app-note> -->
          </div>
        </div>
  `,
  styles: [
  ]
})
export class ArchieveComponent implements OnInit {
  notesArray:any ;
  constructor() { }

  ngOnInit(): void {
  }

}
