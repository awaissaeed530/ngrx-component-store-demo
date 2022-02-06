import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './common.types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  getAll(): Observable<Product[]> {
    return this._httpClient.get<Product[]>('/api/products');
  }

}
