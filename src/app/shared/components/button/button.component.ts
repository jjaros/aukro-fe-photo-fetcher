import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button class="btn btn-{{type}}"><ng-content/></button>',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() type: 'primary' | 'secondary' | 'link' = 'primary';

}
