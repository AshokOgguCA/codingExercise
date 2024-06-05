import { Component, Input } from "@angular/core";
import { Book } from "../book-list/book-list.component";

@Component({
  selector: "app-books",
  standalone: false,
  templateUrl: "./books.component.html",
  styleUrl: "./books.component.css",
})
export class BooksComponent {
  public books: Book[] = [
    { title: "title", author: "author", publication: "publication" },
  ];

  constructor() {
    console.log("Render");
  }

  addBooks() {
    const newBooks = [
      ...this.books,
      { title: "title", author: "author", publication: "publication" },
    ];
    this.books = newBooks;
  }
}
