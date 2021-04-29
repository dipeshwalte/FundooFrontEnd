import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-color-pallete',
  templateUrl: './color-pallete.component.html',
  styleUrls: ['./color-pallete.component.scss']
})
export class ColorPalleteComponent implements OnInit {
  colorArray = [false,true,false,false,false,false,false,false,false,false,false,false,false];
  colorDictionary = {"0":"white","1":"#f28b82","2":"#fbbc04","3":"#fff475","4":"#ccff90","5":"#a7ffeb","6":"#cbf0f8","7":"#aecbfa","8":"#d7aefb","9":"#fdcfe8","10":"#e6c9a8","11":"#e8eaed"}
  @Output() colorEmitter = new EventEmitter<string>();
  constructor() {
  }
  ngOnInit(): void {
  }
  changeTick(i:number)
  {
    for (let index = 0; index < 12; index++) {
      if(index==i)
        {
        this.colorArray[index]=true;
        console.log(this.colorDictionary[index]);
        this.colorEmitter.emit(this.colorDictionary[index]);
        }
      else
        this.colorArray[index]=false;
    }
   }
  }

