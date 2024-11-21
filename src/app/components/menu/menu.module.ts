import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    IonicModule, // Importa IonicModule aquí
  ],
  exports: [MenuComponent], // Exporta el componente para usarlo en otros lugares
})
export class MenuComponentModule {}

