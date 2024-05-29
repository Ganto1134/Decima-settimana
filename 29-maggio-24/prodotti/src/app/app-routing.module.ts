import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
  { path: '',
  component: ProductListComponent
  },
  { path: 'favorites',
  component: FavoritesComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
