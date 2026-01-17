import { Component } from '@angular/core';
import { CatalogService } from '../catalog-service';

@Component({
  selector: 'app-product-catalog',
  standalone: false,
  templateUrl: './product-catalog.html',
  styleUrl: './product-catalog.css',
})
export class ProductCatalog {
categories: any[] = [];
  
  constructor(private cs: CatalogService) {
    this.categories = cs.getCategories();
  }
}
