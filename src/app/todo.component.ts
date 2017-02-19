import {Component, EventEmitter, Input, Output, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'todo',
  template: `
    <h1>
      <ng-content></ng-content>{{articleTitle}}
    </h1>
  `
})
export class TodoComponent implements OnInit, OnDestroy {
  @Input() articleTitle:string;

  ngOnInit() {
    console.log('created', this.articleTitle);
  }

  ngOnDestroy() {
    console.log('destroyed', this.articleTitle);
  }
}
