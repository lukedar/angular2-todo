import {Component, EventEmitter, Output} from '@angular/core';
import {SelectedComponent} from './selected.component';

@Component({
  selector: 'article-list',
  template: `
    <selected></selected>
      <input (keyup.enter)="add($event)">
      <article *ngFor="let title of titles; let i = index"
             [articleTitle]="title"
             (click)="setActiveId(i)"
             [style.background-color]="getStyle(i)"
             (click)="emitSelectedItem(title)">
      <button (click)="remove(i)">X</button>
    </article>
  `
})
export class ArticleListComponent {
  @Output()
  selectedTitleEvent: EventEmitter<string> = new EventEmitter<string>();

  titles:Array<string> = [];
  activeId:Number = null;

  add(e):void {
    this.titles.push(e.target.value);
    e.target.value = '';
  }

  remove(index:number) {
    this.titles.splice(index, 1);
  }

  setActiveId(id) {
    this.activeId = id;
  }

  getStyle(id) {
    if (this.activeId === id) {
      return 'red';
    } else {
      return 'transparent';
    }
  }

  emitSelectedItem(title) {
    this.selectedTitleEvent.emit(title);
  }
}
