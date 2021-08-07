import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { AuthorModel } from './author.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title:string = "Authors"
  authors: AuthorModel[];
  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    })
  }
  viewauthor(author:any)
  {
    localStorage.setItem("viewauthorId", author._id.toString());
    this.router.navigate(['author']);
  }
}
