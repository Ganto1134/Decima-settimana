import { Component, OnInit } from '@angular/core';
import { iRoot } from '../../Models/i-root';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: iRoot[] = [];
  favorites : iRoot[] = [];

  constructor(private prodottiSvc: ProductsService) { }

  ngOnInit() {
    this.prodottiSvc.getProducts().subscribe(products => {
      this.products = products;
      console.log(this.products);
    });
  }


  toggleFavorite(product: iRoot): void {
    this.prodottiSvc.toggleFavorite(product);
  }

  isFavorite(product: iRoot): boolean {
    return this.prodottiSvc.favorites.some(fav => fav.id === product.id);
  }
}
