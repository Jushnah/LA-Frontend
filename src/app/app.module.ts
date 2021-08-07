import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
// import { FormControl } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { BookComponent } from './book/book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AuthorComponent } from './author/author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    AuthorsComponent,
    AddbookComponent,
    AddauthorComponent,
    BookComponent,
    UpdateBookComponent,
    AuthorComponent,
    UpdateAuthorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }