import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-icons-panel',
  templateUrl: './icons-panel.component.html',
  styleUrls: ['./icons-panel.component.scss']
})
export class IconsPanelComponent implements OnInit {
  moreMenuOn:boolean=false;
  colorPalleteOn:boolean=false;
  archiveClickedFlag:boolean=false;
  //binClickedFlag:boolean=false;
  @Output() moreMenuClicked = new EventEmitter<Boolean>();
  @Output() colorPalleteClicked = new EventEmitter<Boolean>();
  @Output() archiveClicked = new EventEmitter<Boolean>();
  //@Output() binClicked = new EventEmitter<Boolean>();
  constructor(private service:UserService,
    ) { }

  ngOnInit(): void {
  }
  onMoreMenuClick(){
    this.moreMenuClicked.emit(!this.moreMenuOn);
    this.moreMenuOn = !this.moreMenuOn;
  }
  onColorPalleteClick(){
    this.colorPalleteClicked.emit(!this.colorPalleteOn);
    this.colorPalleteOn = !this.colorPalleteOn;
  }
  onArchieveClick(){
    this.archiveClicked.emit(!this.archiveClickedFlag);
  }
  // onDeleteClick(){
  //   this.binClicked.emit(!this.binClickedFlag);
  // }

}
