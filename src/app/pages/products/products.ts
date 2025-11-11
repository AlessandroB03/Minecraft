import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products';
import { Product } from '../../services/products';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html',   // sin .component
  styleUrls: ['./products.scss']    // sin .component
})
export class Products implements OnInit {
  productos: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productos = this.productsService.getProducts();
  }
}
