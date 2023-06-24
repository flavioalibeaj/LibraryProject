import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

searchTerm: string = '';

  onSearch(event: Event) {
   
    const inputValue = (event.target as HTMLInputElement).value;
    
    console.log('Ricerca per: ', inputValue);
  }
  

  clearSearch() {
    this.searchTerm = '';
  }
}


function search() {
  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  const searchTerm = searchInput.value;
  
  console.log('Ricerca per: ', searchTerm);
}
