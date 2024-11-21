import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'products/maderas',
    loadChildren: () =>
      import('./products/maderas/maderas.module').then((m) => m.MaderasPageModule),
  },
  {
    path: 'products/gomas',
    loadChildren: () =>
      import('./products/gomas/gomas.module').then((m) => m.GomasPageModule),
  },
  {
    path: 'products/remeras',
    loadChildren: () =>
      import('./products/remeras/remeras.module').then((m) => m.RemerasPageModule),
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
