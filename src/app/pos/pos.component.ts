import { Component, OnInit } from '@angular/core';
import { Product } from '../common/common.types';
import { PosStore } from './pos.store';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html'
})
export class PosComponent implements OnInit {

  products$ = this._posStore.products$;
  selectedProducts$ = this._posStore.selectedProducts$;
  productsLoading$ = this._posStore.productsLoading$;

  constructor(
    private readonly _posStore: PosStore
  ) {
  }

  ngOnInit(): void {
  }

  addToCart(product: Product): void {
    this._posStore.addToCart(product);
  }

  removeFromCart(product: Product): void {
    this._posStore.removeFromCart(product);
  }

}
