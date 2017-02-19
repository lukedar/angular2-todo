import {Component, Input, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'selected',
  template: `
    <h1 (selectedTitleEvent)="setSetlectedTitle($event)">
      Selected Item: {{ selectedItem }}
    </h1>
  `
})
export class SelectedComponent  {
  selectedItem:string = '';

  setSetlectedTitle(event) {
    console.log('emited event', event);
    // this.selectedItem = title;
  }
}
