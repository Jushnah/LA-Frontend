import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor( private http:HttpClient) { }
  getBook(id:any){
    return this.http.get("http://localhost:3000/books/"+id);
  }
  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }
  newBook(item){
    return this.http.post("http://localhost:3000/insertbook",{"book":item})
    .subscribe(data=>{
      console.log(data)
    })
  } 
  editbook(book:any)
  {
    console.log('book update')
    return this.http.put("http://localhost:3000/updatebook",book)
    .subscribe(data =>{console.log(data)})
  }
  deletebook(id:any)
  {
    return this.http.delete("http://localhost:3000/removebook/"+id)
  }

}
