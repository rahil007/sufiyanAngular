import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { HelloworldComponent } from './Components/helloworld/helloworld.component';
import { HomeComponent } from './Components/home/home.component';
import { MenuComponent } from './Components/menu/menu.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // }, 
  {
    path: 'hello',
    component: HelloworldComponent
  }, 
  {
    path: 'home',
    component: HomeComponent
  }, 
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
