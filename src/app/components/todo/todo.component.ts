import {Component, OnInit} from '@angular/core';
import {Todo} from "../../models/todo.interface";
import {HttpService} from "../../services/httpService";
import {TodoResponse} from "../../models/responses/todoResponse.interface";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Todo[];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getTodo().subscribe((toresp: TodoResponse) => {
      this.todos = toresp.data

    });
  }
}
