import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first, shareReplay, delay, mergeMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../models/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl: string = environment.apiUrl;
  private http: HttpClient = inject(HttpClient);
  products$!: Observable<Product[]>;

  constructor() {
    this.initProducts();
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}`);
  }

  insertProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, newProduct);
  }

  getProductById(id: number): Observable<Product> {
    return this.products$.pipe(
      mergeMap((products) => products),
      first((product) => product.id == id)
    );
  }

  initProducts() {
    let url: string = this.baseUrl + `?$orderby=ModifiedDate%20desc`;

    this.products$ = this.http
      .get<Product[]>(url)
      .pipe(delay(2000), shareReplay());
  }

  clearCache() {
    this.initProducts();
  }
}
