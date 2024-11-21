import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GomasPageRoutingModule } from './gomas-routing.module';

import { GomasPage } from './gomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GomasPageRoutingModule
  ],
  declarations: [GomasPage]
})
export class GomasPageModule {}
