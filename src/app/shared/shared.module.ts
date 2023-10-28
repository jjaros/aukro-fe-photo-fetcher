import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    NgbModule,
    CommonModule
  ],
  exports: [
    ButtonComponent,
    SwitcherComponent,
    NgbModule,
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    SwitcherComponent
  ]
})
export class SharedModule {
}
