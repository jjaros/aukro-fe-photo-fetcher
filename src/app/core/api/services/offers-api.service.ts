import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchItemsCommonRequest } from '../models/search-items-common.request';
import { SearchItemsCommonResponse } from '../models/search-items-common.response';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffersApiService {

  constructor(private readonly http: HttpClient) {
  }

  searchItemsCommon(request?: SearchItemsCommonRequest | null, page = 0, pageSize = 60): Observable<SearchItemsCommonResponse> {
    const payload: SearchItemsCommonRequest = {
      categorySeoUrl: "sberatelstvi",
      fallbackItemsCount: 12,
      splitGroupKey: "listing",
      splitGroupValue: "A18",
      ...request
    };
    const queryParams = new HttpParams()
      .set('page', page)
      .set('size', pageSize);
    return this.http.post<SearchItemsCommonResponse>(`${environment.apiBasePath}/backend-web/api/offers/searchItemsCommon`, payload, {params: queryParams});
  }
}
