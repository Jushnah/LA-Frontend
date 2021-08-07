import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { BookModel } from '../books/book.model';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book: BookModel[];

  constructor(private router:Router,private bookService:BooksService) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editbookId");
    this.bookService.getBook(bookId).subscribe((data)=>{
      this.book =JSON.parse(JSON.stringify(data));
  })
  }
  editbook()
  {    
    this.bookService.editbook(this.book);   
    alert("Successfully updated");
    this.router.navigate(['books']);
  }
}
