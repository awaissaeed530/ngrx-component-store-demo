import { Component } from '@angular/core';
import { Product } from '../common';
import { PosStore } from './pos.store';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
})
export class PosComponent {
  products$ = this._posStore.products$;
  selectedProducts$ = this._posStore.selectedProducts$;
  productsLoading$ = this._posStore.productsLoading$;

  constructor(private readonly _posStore: PosStore) {}

  addToCart(product: Product): void {
    this._posStore.addToCart(product);
  }

  removeFromCart(product: Product): void {
    this._posStore.removeFromCart(product);
  }
}
