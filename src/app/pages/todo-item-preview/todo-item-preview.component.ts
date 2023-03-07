import { TodoService } from 'src/app/services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-item-preview',
  templateUrl: './todo-item-preview.component.html',
  styleUrls: ['./todo-item-preview.component.scss'],
})
export class TodoItemPreviewComponent implements OnInit {
  todo: string | null = '';

  constructor(
    private readonly todoService: TodoService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.todo = this.route.snapshot.paramMap.get('id');
  }
}
