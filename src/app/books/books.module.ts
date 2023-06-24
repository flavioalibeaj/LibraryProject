import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { SearchComponent } from './search/search/search.component';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
  ],
  exports: [
    SearchComponent
  ]
})
export class BooksModule { }
