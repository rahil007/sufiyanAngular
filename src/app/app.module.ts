import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './Components/helloworld/helloworld.component';
import { MenuComponent } from './Components/menu/menu.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { CounterComponent } from './Components/counter/counter.component';
import { ChangeColorComponent } from './Components/change-color/change-color.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    CounterComponent,
    ChangeColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
