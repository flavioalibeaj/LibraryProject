import { Component } from '@angular/core';

@Component({
  selector: 'app-books-page-components',
  templateUrl: './books-page-components.component.html',
  styleUrls: ['./books-page-components.component.scss']
})
export class BooksPageComponentsComponent {

  categories: string[] = ['Fiction', 'Non-Fiction', 'Mystery', 'Romance', 'Sci-Fi'];
  languages: string[] = ['English', 'Italian', 'French', 'Spanish', 'German'];
  authors: string[] = ['Armor Ramsey', 'Armor Ramsey', 'Armor Ramsey', 'Armor Ramsey', 'Armor Ramsey', 'Armor Ramsey']
  BooksPageComponentsComponent = BooksPageComponentsComponent;
}