import { Injectable } from "@angular/core";
import { Book } from "./book-list/book-list.component";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BookListNewService {
  private _books: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

 
  public books: Observable<Book[]> = this._books.asObservable();

  constructor() {}

  addNewBook(bookData: Book) {
    const currentBooks = this._books.getValue(); 
    const updatedBooks = [...currentBooks, bookData]; 
    this._books.next(updatedBooks);
  }
}



