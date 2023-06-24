import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>("http://localhost:5000/books")
  }

  getOne(id: string | number): Observable<any> {
    return this.http.get<any>("http://localhost:5000/books/" + id)
  }


}
