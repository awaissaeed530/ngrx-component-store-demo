import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { Product, ProductService } from '../common';

export interface PosState {
  products: Product[];
  productsLoading: boolean;
  selectedProducts: Product[];
}

@Injectable()
export class PosStore extends ComponentStore<PosState> {
  constructor(private readonly _productService: ProductService) {
    super({ products: [], productsLoading: false, selectedProducts: [] });
    this.loadProducts();
  }

  readonly products$ = this.select((state) => state.products);

  readonly selectedProducts$ = this.select((state) => state.selectedProducts);

  readonly productsLoading$ = this.select((state) => state.productsLoading);

  readonly addToCart = this.updater((state, product: Product) => ({
    ...state,
    selectedProducts: [...state.selectedProducts, product],
    products: state.products.filter((x) => x.id !== product.id),
  }));

  readonly removeFromCart = this.updater((state, product: Product) => ({
    ...state,
    selectedProducts: state.selectedProducts.filter((x) => x.id !== product.id),
    products: [...state.products, product],
  }));

  private readonly setProducts = this.updater((state, products: Product[]) => ({
    ...state,
    products: [...products],
  }));

  private readonly setProductsLoading = this.updater(
    (state, loading: boolean) => ({
      ...state,
      productsLoading: loading,
    })
  );

  readonly loadProducts = this.effect(() => {
    this.setProductsLoading(true);
    return this._productService.getAll().pipe(
      tap((products) => {
        this.setProducts(products);
      }),
      finalize(() => this.setProductsLoading(false)),
      catchError((err) => {
        console.log('--> Error occurred while loading products:', err);
        return EMPTY;
      })
    );
  });
}
