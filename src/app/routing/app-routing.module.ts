import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddComponent } from '../pages/todo-add/todo-add.component';
import { TodoListComponent } from '../pages/todo-list/todo-list.component';
import { TodoItemPreviewComponent } from '../pages/todo-item-preview/todo-item-preview.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'todo-list', component: TodoListComponent },
  { path: 'todo-list/:id', component: TodoItemPreviewComponent },
  { path: 'todo-list-add', component: TodoAddComponent },
  { path: '', redirectTo: '/todo-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
