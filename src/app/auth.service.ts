import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "http://localhost:3000/login";

  constructor( private http:HttpClient) { }
  
  newUser(item){
    return this.http.post("http://localhost:3000/signup",{"user":item})
    .subscribe(data=>{
      console.log(data)
    })
  } 

  loginUser(user:any){
    return this.http.post<any>("http://localhost:3000/login",user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
