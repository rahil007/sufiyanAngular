import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent implements OnInit {

  constructor() { }

  @Output('changeColor') changeColor : EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  ChangePageColor() {
    this.changeColor.emit();
  }
}
