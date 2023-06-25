import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { SearchComponent } from './search/search/search.component';
import { BooksPageComponentsComponent } from './pages/books-page-components/books-page-components.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchComponent,
    BooksPageComponentsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchComponent
  ]
})
export class BooksModule { }
