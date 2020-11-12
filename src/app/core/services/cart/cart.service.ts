import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() {}

  // cambio de datos que cualquier componente puede preguntar y ver que articuloshay en el carrito
  addCart(product: Product): void {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
