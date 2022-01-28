import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {PostComponent} from './components/post/post.component';
import {TodoComponent} from './components/todo/todo.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { CommentComponent } from './components/post/comment/comment.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    TodoComponent,
    CommentComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'public/v1/posts/:id', component: PostComponent},
      {path: 'public/v1/users/:id', component: UserComponent},
      {path: 'public/v1/todos', component: TodoComponent},
      {path: 'public/v1/comments', component: CommentComponent}
    ])

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
