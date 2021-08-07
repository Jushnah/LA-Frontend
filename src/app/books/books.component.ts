import { Component, OnInit } from '@angular/core';
import { BookModel } from './book.model';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:string = "Books"
  books: BookModel[];
  constructor(private booksService: BooksService, private router:Router) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }
  viewbook(book:any)
  {
    localStorage.setItem("viewbookId", book._id.toString());
    this.router.navigate(['book']);
  }

}
