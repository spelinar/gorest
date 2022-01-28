import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../models/user.interface";
import {Todo} from "../models/todo.interface";
import {PostsResponse} from "../models/responses/postsResponse.interface";
import {UsersResponse} from "../models/responses/usersResponse.interface";
import {TodoResponse} from "../models/responses/todoResponse.interface";
import {CommentResponse} from "../models/responses/commentResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  urlPosts = 'https://gorest.co.in/public/v1/posts';
  urlUsers = 'https://gorest.co.in/public/v1/users/';
  urlTodos = 'https://gorest.co.in/public/v1/todos';
  urlComments = 'https://gorest.co.in/public/v1/comments';

  token = '6c50d74f4c27e29122342e278a73497773bcfe1c0e9e326603177d9c8f2d3be3';

  constructor(
    private http: HttpClient,
  ) {
  }

  getPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>(this.urlPosts);
  }

  getComment(): Observable<CommentResponse> {
    return this.http.get<CommentResponse>(this.urlComments)
  }

  getUser(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(this.urlUsers);
  }

  getTodo(): Observable<TodoResponse> {
    return this.http.get<TodoResponse>(this.urlTodos);
  }

}
