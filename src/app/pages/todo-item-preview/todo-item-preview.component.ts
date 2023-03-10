import { TodoService } from 'src/app/services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-item-preview',
  templateUrl: './todo-item-preview.component.html',
  styleUrls: ['./todo-item-preview.component.scss'],
})
export class TodoItemPreviewComponent implements OnInit {
  constructor(
    private readonly todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  todos!: any[];
  todo: any;
  id!: string | null;
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.todoService.fetchTodoById(this.id).subscribe((todo) => {
      this.todo = todo;
    });
  }

  removeTodo() {
    this.todoService.deleteToDoById(this.todo.id).subscribe(() => {
      this.router.navigate(['/todo-list']);
      this.todoService.fetchTodos().subscribe((todos) => {
        this.todos = todos;
      });
    });
  }
}
