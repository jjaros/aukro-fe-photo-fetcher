import { Component, Input } from '@angular/core';
import { OfferItemModel } from '../../../../core/api/models/offer-item.model';

@Component({
  selector: 'app-photo-fetcher-list-item',
  templateUrl: './photo-fetcher-list-item.component.html',
  styleUrls: ['./photo-fetcher-list-item.component.scss']
})
export class PhotoFetcherListItemComponent {

  @Input() itemData: OfferItemModel;
  @Input() grayscalePhoto: boolean;

  getItemLink(): string {
    return `https://aukro.cz/${this.itemData.seoUrl}-${this.itemData.itemId}`;
  }

}
