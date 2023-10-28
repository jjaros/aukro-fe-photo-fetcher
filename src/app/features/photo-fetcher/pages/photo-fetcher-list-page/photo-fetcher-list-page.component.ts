import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { OfferItemModel } from '../../../../core/api/models/offer-item.model';
import { OffersApiService } from '../../../../core/api/services/offers-api.service';
import { ArrayUtils } from '../../../../core/utils/array.utils';

@Component({
  selector: 'app-photo-fetcher-list-page',
  templateUrl: './photo-fetcher-list-page.component.html',
  styleUrls: ['./photo-fetcher-list-page.component.scss']
})
export class PhotoFetcherListPageComponent implements OnInit {

  displayedItems: Array<OfferItemModel> = [];

  private _loadedNotDisplayedItems: Array<OfferItemModel> = [];
  private _destroyRef = inject(DestroyRef);
  private _lastLoadedPage = 0;
  private _grayscalePhotos = false;

  private static readonly SHOW_ITEMS_BY_COUNT = 4;
  private static readonly LOAD_ITEMS_PAGE_SIZE = 20;

  constructor(private readonly offersApiService: OffersApiService) {
  }

  get grayscalePhotos(): boolean {
    return this._grayscalePhotos;
  }

  setGrayscalePhotos(checked: boolean) {
    this._grayscalePhotos = checked;
  }

  ngOnInit(): void {
    this.loadOfferItems();
  }

  showMoreItems() {
    this.loadOfferItems(this._lastLoadedPage + 1);
  }

  private loadOfferItems(page = 0) {
    if (page && this._loadedNotDisplayedItems?.length) {
      this.displayRandomItems();
    } else {
      this.offersApiService.searchItemsCommon(null, page, PhotoFetcherListPageComponent.LOAD_ITEMS_PAGE_SIZE)
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe(data => {
          this._lastLoadedPage = data.page.number;
          this._loadedNotDisplayedItems = ArrayUtils.shuffle([...data.content]);
          this.displayRandomItems();
        });
    }
  }

  private displayRandomItems() {
    if (this._loadedNotDisplayedItems.length) {
      this.displayedItems.push(...this._loadedNotDisplayedItems.splice(0, PhotoFetcherListPageComponent.SHOW_ITEMS_BY_COUNT));
    }
  }
}
