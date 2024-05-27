import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NewComponent } from "./new/new.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'new',
    component: NewComponent,
    title: 'New page'
  }
];