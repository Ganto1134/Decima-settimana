import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { iRoot } from '../../Models/i-root';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  favorites: iRoot[] = [];

  constructor(private prodottiSvc: ProductsService){ }
  ngOnInit(): void {
    this.prodottiSvc.getFavorites().subscribe((data: iRoot[]) => {
      this.favorites = data;
    });
    }

}
