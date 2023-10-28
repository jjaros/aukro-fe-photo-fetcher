import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {

  @Input() label: string;
  @Input() checked = false;
  @Output() onToggleChecked: EventEmitter<boolean> = new EventEmitter<boolean>();
}
