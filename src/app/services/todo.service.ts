import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../shared/interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  onCreateTodo(todoData: { title: string; description: string }): void {
    this.http
      .post(
        'https://ng-todo-cf99a-default-rtdb.firebaseio.com/todos.json',
        todoData
      )
      .subscribe();
  }

  fetchTodos(): Observable<Todo[]> {
    return this.http
      .get('https://ng-todo-cf99a-default-rtdb.firebaseio.com/todos.json')
      .pipe(
        map((response: any) => {
          const resultTodos: Todo[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              const todo: Todo = { id: key, label: response[key].title };
              resultTodos.push(todo);
            }
          }
          return resultTodos;
        })
      );
  }

  fetchTodoById(id: string | null) {
    return this.http
      .get(`https://ng-todo-cf99a-default-rtdb.firebaseio.com/todos/${id}.json`)
      .pipe(map((response: any) => ({ id: id, ...response })));
  }

  deleteToDoById(id: string) {
    return this.http.delete(
      `https://ng-todo-cf99a-default-rtdb.firebaseio.com/todos/${id}.json`
    );
  }
}
