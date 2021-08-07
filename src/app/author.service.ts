import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor( private http:HttpClient) { }
  getAuthor(id:any){
    return this.http.get("http://localhost:3000/authors/"+id);
  }
  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }
  newAuthor(item){
    return this.http.post("http://localhost:3000/insertauthor",{"author":item})
    .subscribe(data=>{
      console.log(data)
    })
  }
  editauthor(author:any)
  {
    console.log('author update')
    return this.http.put("http://localhost:3000/updateauthor",author)
    .subscribe(data =>{console.log(data)})
  }
  deleteauthor(id:any)
  {
    return this.http.delete("http://localhost:3000/removeauthor/"+id)
  }
}
