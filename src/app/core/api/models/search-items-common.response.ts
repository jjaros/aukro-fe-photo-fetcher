import { OfferItemModel } from './offer-item.model';

export interface SearchItemsCommonResponse {
  content: Array<OfferItemModel>;
  page: {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
  }
}
