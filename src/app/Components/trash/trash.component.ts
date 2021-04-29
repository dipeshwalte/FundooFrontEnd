import { Component, OnInit } from '@angular/core';
import { UserService} from '../../Services/UserService/user.service'
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(private service:UserService) { }
  notesArray:any;
  ngOnInit(): void {
    this.service.getTrashNotes().subscribe((dataReturned:any) =>{ 
      this.notesArray = dataReturned.data.reverse();
    })
  }

}
