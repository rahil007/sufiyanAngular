import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  counter: number = 0;

  ngOnInit(): void {
  }

  increaseCounter() {
    this.counter = this.counter + 1;
  }

}
