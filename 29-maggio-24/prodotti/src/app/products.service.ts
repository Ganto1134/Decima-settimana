import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iRoot } from '../app/Models/i-root';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl:string = 'https://dummyjson.com/products';
  favorites: iRoot[] = [];
  getFavorites():Observable<iRoot[]> {
    return of(this.favorites);
  }

  constructor(private http:HttpClient) {}

  getProducts():Observable<iRoot[]> {
    return this.http.get<iRoot[]>(this.apiUrl).pipe(
      map((response:any) =>response.products));
  }

  toggleFavorite(product: iRoot): void {
    console.log('Toggling favorite for:', product);
    const index = this.favorites.findIndex(fav => fav.id === product.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(product);
    }
    console.log('Updated favorites:', this.favorites);
  }

  isFavorite(product: iRoot): boolean {
    return this.favorites.some(fav => fav.id === product.id);
  }

}
