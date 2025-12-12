import { Injectable } from '@angular/core';

export interface Image{
  id: number;
  nombre:string;
  descripcion: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Images {
  
  private images: Image[] = [
    {
      id: 1,
      nombre: 'Cueva',
      descripcion : 'Las cuevas en Minecraft son sistemas subterráneos llenos de minerales, oscuridad y criaturas hostiles. Son esenciales para la minería y la exploración.',
      imagen: './img/cueva.jpg'
    },
    {
      id: 2,
      nombre: 'Selva',
      descripcion: 'El bioma de selva es denso y exuberante, con árboles gigantes, lianas y abundante vegetación. Aquí aparecen loros, ocelotes y templos ocultos.',
      imagen: './img/selva.jpg'
    },
    {
      id: 3,
      nombre: 'Montaña nevada',
      descripcion: 'Las montañas nevadas presentan picos altos cubiertos de nieve y hielo. Son frías y peligrosas, con cabras y un terreno escarpado ideal para retos de supervivencia.',
      imagen: './img/montaña.jpg'
    },
    {
      id: 4,
      nombre: 'Pantano',
      descripcion: 'El bioma de pantano es húmedo y fangoso, con agua poco profunda, lirios y árboles oscuros. Aquí habitan brujas en chozas y abundan los slimes durante la noche.',
      imagen: './img/pantano.jpg'
    }
  ]

  constructor(){}

  getImages(): Image[] {
    return this.images;
  }
}