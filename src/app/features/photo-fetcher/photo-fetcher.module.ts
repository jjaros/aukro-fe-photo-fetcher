import { NgModule } from '@angular/core';
import { ActionButtonsSectionComponent } from './components/action-buttons-section/action-buttons-section.component';
import { PhotoFetcherListItemComponent } from './components/photo-fetcher-list-item/photo-fetcher-list-item.component';
import { PhotoFetcherListPageComponent } from './pages/photo-fetcher-list-page/photo-fetcher-list-page.component';
import { RouterModule } from '@angular/router';
import { PhotoFetcherRoutingModule } from './photo-fetcher-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ActionButtonsSectionComponent,
    PhotoFetcherListItemComponent,
    PhotoFetcherListPageComponent
  ],
  imports: [
    RouterModule,
    PhotoFetcherRoutingModule,
    SharedModule
  ]
})
export class PhotoFetcherModule {
}
