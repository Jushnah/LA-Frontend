import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { AuthorModel } from '../authors/author.model';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  title:String = "Add Author";
  constructor(private authorService: AuthorService,private router: Router) { }
  authorItem = new AuthorModel(null,null,null);
  ngOnInit() {
  }
  AddAuthor(){
    this.authorService.newAuthor(this.authorItem);
    console.log("called");
    alert("Success");
    this.router.navigate(['/authors']);
  }

}
