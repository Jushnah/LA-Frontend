import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { BookModel } from '../books/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private booksService:BooksService, private router: Router) { }

  books: BookModel[];
  
  ngOnInit(): void {
    let bookId = localStorage.getItem("viewbookId");
    this.booksService.getBook(bookId).subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data));
    })
  }
  editbook(book:any)
  {
    localStorage.setItem("editbookId", book._id.toString());
    this.router.navigate(['updatebook']);
  }
  deletebook(book)
  {
    this.booksService.deletebook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      })
      alert("Successfully deleted");
      this.router.navigate(['books']);
    }
}
