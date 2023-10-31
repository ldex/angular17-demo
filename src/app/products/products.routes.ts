import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'insert', component: ProductInsertComponent },
  { path: ':id', component: ProductDetailComponent },
];
