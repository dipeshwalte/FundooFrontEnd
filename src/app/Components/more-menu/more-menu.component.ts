import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-more-menu',
  templateUrl: './more-menu.component.html',
  styleUrls: ['./more-menu.component.scss']
})
export class MoreMenuComponent implements OnInit {

  constructor() { }
  @Output() deleteButtonEmitter = new EventEmitter<Boolean>();
  ngOnInit(): void {
  }
  onDeleteClick(){
    this.deleteButtonEmitter.emit(true);
  }
}
