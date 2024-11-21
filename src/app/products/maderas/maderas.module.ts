import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaderasPageRoutingModule } from './maderas-routing.module';

import { MaderasPage } from './maderas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaderasPageRoutingModule
  ],
  declarations: [MaderasPage]
})
export class MaderasPageModule {}
