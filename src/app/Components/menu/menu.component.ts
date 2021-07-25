import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input('menuList') menuList: Array<any> = new Array();
  @Output('changeColor') changeColor: EventEmitter<any> = new EventEmitter();
  constructor() { }


  counter: number = 0;

  ngOnInit(): void {
    
  }

  changeColorEvent() {
    this.changeColor.emit();
  }
}
