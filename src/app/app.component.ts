import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnNg';

  menuList = [
    // {
    //   link: '/hello',
    //   name: 'Hello'
    // },
    {
      link: '/home',
      name: 'Home'
    },
    {
      link: '/about',
      name: 'About'
    }
  ];

  backgroundColor: string = 'white';

  changeAppColor() {
    this.backgroundColor = 'blue';
  }
}
