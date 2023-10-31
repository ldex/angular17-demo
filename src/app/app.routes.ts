import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home.component';
import { AdminComponent } from './shared/admin.component';
import { ContactComponent } from './shared/contact.component';
import { ErrorComponent } from './shared/error.component';

export const routes: Routes = [
    { path: '', redirectTo:'/home', pathMatch:'full' },
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', loadChildren: ()=> import('./products/products.routes').then(m => m.routes) },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo:'/error?reason=NavError' }
];
