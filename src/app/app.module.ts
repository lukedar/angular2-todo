import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TodoComponent} from './todo.component';
import {TodoListComponent} from './todo-list.component';
import {SelectedComponent} from './selected.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    TodoComponent,
    TodoListComponent,
    SelectedComponent
  ],
  bootstrap: [
    TodoListComponent
  ]
})
export class AppModule {}
