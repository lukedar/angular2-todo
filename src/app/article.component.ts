import {Component, EventEmitter, Input, Output, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <h1 >
      <ng-content></ng-content>{{articleTitle}}
    </h1>
  `
})
export class ArticleComponent implements OnInit, OnDestroy {
  @Input() articleTitle:string;

  ngOnInit() {
    console.log('created', this.articleTitle);
  }

  ngOnDestroy() {
    console.log('destroyed', this.articleTitle);
  }
}
