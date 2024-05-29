import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputOutputComponent } from './pages/input-output/input-output.component';
import { ListaComponent } from './pages/lista/lista.component';

const routes: Routes = [
  { path: '',
    component: InputOutputComponent
  },
  {
    path: 'esempio',
    component: ListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
