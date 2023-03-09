import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/operators';

interface TodosResponse {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) {}

  onCreateTodo(todoData: { title: string; description: string }): void {
    this.http
      .post(
        'https://ng-todo-cf99a-default-rtdb.firebaseio.com/todos.json',
        todoData
      )
      .subscribe((response) => console.log(response));
  }

  fetchTodos() {
    // TODO: PROBLEM WITH MAPPING - WORK IT OUT
    this.http
      .get('https://ng-todo-cf99a-default-rtdb.firebaseio.com/todos.json')
      // .pipe(map(responseData => {
      //   const todos = [];
      //   for(const key in responseData) {
      //     todos.push(responseData[key]);
      //   }
      // }))
      .subscribe((todos) => console.log(todos));
  }
}
