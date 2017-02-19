import {Component, EventEmitter, Input, Output, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <h1>
      <ng-content></ng-content>{{articleTitle}}
    </h1>
  `
})
export class ArticleComponent implements OnInit, OnDestroy {
  @Input() articleTitle:string;

  @Output()
  selectedTitleEvent: EventEmitter<string> = new EventEmitter<string>();

  emitSelectedItem(title) {
    console.log('emited from article', title);
    this.selectedTitleEvent.emit(title);
  }

  ngOnInit() {
    console.log('created', this.articleTitle);
  }

  ngOnDestroy() {
    console.log('destroyed', this.articleTitle);
  }
}
