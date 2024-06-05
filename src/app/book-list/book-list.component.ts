import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { BookListNewService } from "../book-list-new.service";

export interface Book {
  title: string;
  author: string;
  publication: string;
}

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrl: "./book-list.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookListNewService) {}

  ngOnInit(): void {
    this.bookService.books.subscribe((newBooks) => {
      this.books = newBooks;
    });
  }
}
