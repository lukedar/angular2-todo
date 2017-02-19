import {Component, Output} from '@angular/core';
import {SelectedComponent} from './selected.component';

@Component({
  selector: 'article-list',
  template: `
      <h1>To do List</h1>
      <selected [selectedItem]="selectedTitle"></selected>
      <input (keyup.enter)="add($event)">
      <article *ngFor="let title of titles; let i = index"
             [articleTitle]="title"
             (click)="setActiveItem(i, title)"
             [style.background-color]="getStyle(i)">
         <button (click)="remove(i)">X</button>
      </article>
  `
})
export class ArticleListComponent {
  titles:Array<string> = [];
  activeId:Number = null;
  selectedTitle:string  = '';

  add(e):void {
    this.titles.push(e.target.value);
    e.target.value = '';
  }

  remove(index:number) {
    if (this.titles.length === 1) {
      this.selectedTitle = '';
    }

    this.titles.splice(index, 1);
  }

  setActiveItem(id, title) {
    this.activeId = id;
    this.selectedTitle = title;
  }

  getStyle(id) {
    if (this.activeId === id) {
      return 'green';
    }
  }
}
