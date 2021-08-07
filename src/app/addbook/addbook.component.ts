import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../books/book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  title:String = "Add Book";
  constructor(private bookService: BooksService,private router: Router) { }
  bookItem = new BookModel(null,null,null,null,null);
  ngOnInit() {
  }
  AddBook(){
    this.bookService.newBook(this.bookItem);
    console.log("called");
    alert("Successfully added");
    this.router.navigate(['/books']);
  }

}
