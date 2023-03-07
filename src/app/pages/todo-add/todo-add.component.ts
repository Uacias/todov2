import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent {
  todos: string[] = [];
  todo: string = '';

  constructor(private readonly todoService: TodoService) {
    this.todoService.todoList.subscribe((todos) => (this.todos = todos));
  }

  addTodo(todo: string) {
    const _todos = [...this.todos];
    _todos.push(todo);
    this.todoService.todoList.next(_todos);
    this.todo = '';
    console.log(this.todos);
  }
}
