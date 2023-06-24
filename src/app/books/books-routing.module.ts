import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search/search.component';

const routes: Routes = [
  {path: "", component: SearchComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BooksRoutingModule { }
