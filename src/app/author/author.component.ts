import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  
  authors : AuthorModel[];

  constructor(private router:Router, private authorService:AuthorService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("viewauthorId");
    this.authorService.getAuthor(authorId).subscribe((data)=>{
    this.authors = JSON.parse(JSON.stringify(data));
    })
  }
  editauthor(author:any)
  {
    localStorage.setItem("editauthorId", author._id.toString());
    this.router.navigate(['updateauthor']);

  }
  deleteauthor(author)
  {
    this.authorService.deleteauthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== author);
      })
      alert("Successfully deleted");
      this.router.navigate(['authors']);
    }

}
