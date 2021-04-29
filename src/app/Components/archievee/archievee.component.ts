import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-archievee',
  templateUrl: './archievee.component.html',
  styleUrls: ['./archievee.component.scss']
})
export class ArchieveeComponent implements OnInit {
  notesArray:any;
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getArchieveNotes().subscribe((dataReturned:any) =>{ 
      this.notesArray = dataReturned.data.reverse();
    })
  }

}
