import {Component, Input, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'selected',
  template: `
    <h>
      Selected Item: {{selectedItem}}
    </h4>
  `
})
export class SelectedComponent  {
  @Input() selectedItem:string;
}
