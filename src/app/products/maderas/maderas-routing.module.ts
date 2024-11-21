import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaderasPage } from './maderas.page';

const routes: Routes = [
  {
    path: '',
    component: MaderasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaderasPageRoutingModule {}
