import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  constructor(private readonly todoService: TodoService) {}

  taskForm!: FormGroup;

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
      description: new FormControl<string>('', {
        nonNullable: true,
      }),
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const title: string = this.taskForm.get('title')?.value;
      const description: string = this.taskForm.get('description')?.value;
      this.todoService.onCreateTodo({ title, description });
      this.taskForm.reset();
    } else {
      alert('Form is invalid');
    }
  }
}
