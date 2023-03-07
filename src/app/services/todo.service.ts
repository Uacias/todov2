import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList = new BehaviorSubject<string[]>(['test1', 'test2', 'test3']);

  constructor() {}
}
