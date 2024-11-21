import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {
  selectedCategory = 'maderas';

  maderas = [
    { name: 'Madera 1', description: 'Alta velocidad y control.', price: 50 },
    { name: 'Madera 2', description: 'Perfecta para spin.', price: 70 },
  ];

  gomas = [
    { name: 'Goma 1', description: 'Ideal para topspin.', price: 30 },
    { name: 'Goma 2', description: 'Alta durabilidad.', price: 40 },
  ];

  remeras = [
    { name: 'Remera 1', description: 'Diseño ligero.', price: 25 },
    { name: 'Remera 2', description: '100% algodón.', price: 20 },
  ];

  segmentChanged(event: any) {
    this.selectedCategory = event.detail.value;
  }
}

