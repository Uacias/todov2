import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos!: any[];
  constructor(public readonly todoService: TodoService) {}
  ngOnInit(): void {
    this.todoService.fetchTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
