import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../authors/author.model';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

 
  author: AuthorModel[];

  constructor(private router:Router,private authorService:AuthorService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editauthorId");
    this.authorService.getAuthor(authorId).subscribe((data)=>{
      this.author =JSON.parse(JSON.stringify(data));
  })
  }
  editauthor()
  {    
    this.authorService.editauthor(this.author);   
    alert("Successfully updated");
    this.router.navigate(['authors']);
  }

}
