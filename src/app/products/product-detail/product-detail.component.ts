import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product!: Product;
  @Output() favouriteAdded = new EventEmitter<Product>()

  private productService = inject(ProductService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  product$!: Observable<Product>


  deleteProduct(id: number) {
    this.productService
        .deleteProduct(id)
        .subscribe({
           next: () => {
                console.log('Product deleted.');
                this.productService.clearCache();
                this.router.navigateByUrl("/products");
            },
           error: e => console.log('Could not delete product. ' + e.message)
          }
        );
  }

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    if (id) {
        this.product$ = this.productService.getProductById(id);
    }
  }
}
