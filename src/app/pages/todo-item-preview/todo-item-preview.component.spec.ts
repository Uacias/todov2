import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemPreviewComponent } from './todo-item-preview.component';

describe('TodoItemPreviewComponent', () => {
  let component: TodoItemPreviewComponent;
  let fixture: ComponentFixture<TodoItemPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItemPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
