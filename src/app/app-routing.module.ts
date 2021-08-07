import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { AuthorService } from './author.service';
import { BookComponent } from './book/book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AuthorComponent } from './author/author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'addbook',
    component: AddbookComponent
  },
  {
    path: 'addauthor',
    component: AddauthorComponent
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'author',
    component: AuthorComponent
  },
  {
    path: 'updatebook',
    component: UpdateBookComponent
  },
  {
    path: 'updateauthor',
    component: UpdateAuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
