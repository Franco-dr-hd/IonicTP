import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  products = [
    {
      name: 'Producto 1',
      description: 'Paleta Pre Armada.',
      price: 19.99,
      image: 'https://http2.mlstatic.com/D_NQ_NP_654222-MLA46193557010_052021-O.webp',
    },
    {
      name: 'Producto 2',
      description: 'Paleta Donic muy buena.',
      price: 29.99,
      image: 'https://http2.mlstatic.com/D_NQ_NP_856104-MLA31130039274_062019-O.webp://via.placeholder.com/150',
    },
    {
      name: 'Producto 3',
      description: 'Paleta Sensei.',
      price: 39.99,
      image: 'https://acdn.mitiendanube.com/stores/001/239/905/products/paleta-4_11-5049e957c4a2347a7c15929508439276-1024-1024.jpg',
    },
  ];
}
