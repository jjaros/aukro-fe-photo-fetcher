import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action-buttons-section',
  templateUrl: './action-buttons-section.component.html',
})
export class ActionButtonsSectionComponent {

  private _grayscale = false

  @Output() onFetchNewPhotos: EventEmitter<any> = new EventEmitter<any>();
  @Output() onToggleGrayscale: EventEmitter<boolean> = new EventEmitter<boolean>();

  get grayscale(): boolean {
    return this._grayscale;
  }

  toggleGrayscale(checked: boolean) {
    this._grayscale = checked;
    this.onToggleGrayscale.emit(this._grayscale);
  }


}
