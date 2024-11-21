import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },  {
    path: 'maderas',
    loadChildren: () => import('./maderas/maderas.module').then( m => m.MaderasPageModule)
  },
  {
    path: 'gomas',
    loadChildren: () => import('./gomas/gomas.module').then( m => m.GomasPageModule)
  },
  {
    path: 'remeras',
    loadChildren: () => import('./remeras/remeras.module').then( m => m.RemerasPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
