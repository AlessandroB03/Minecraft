import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      nombre: 'Espada de Diamante',
      descripcion: 'Arma poderosa para combatir mobs y jugadores.',
      precio: 150,
      imagen: '/img/espadadediamante.png'
    },
    {
      id: 2,
      nombre: 'Pico de Hierro',
      descripcion: 'Herramienta esencial para minar minerales.',
      precio: 80,
      imagen: '/img/pico_hierro.webp'
    },
    {
      id: 3,
      nombre: 'Manzana Dorada',
      descripcion: 'Objeto especial que otorga regeneración y resistencia.',
      precio: 50,
      imagen: '/img/manzana_dorada.png'
    },
    {
      id: 4,
      nombre: 'Bloque de Redstone',
      descripcion: 'Ideal para construir mecanismos y circuitos.',
      precio: 30,
      imagen: '/img/bloque_redstone.webp'
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
