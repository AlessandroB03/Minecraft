import { Component } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  equipo = [
    { nombre: 'Steve', rol: 'Explorador', descripcion: 'El clásico aventurero de Minecraft, siempre listo para minar y construir.' },
    { nombre: 'Alex', rol: 'Constructora', descripcion: 'Ingeniosa y valiente, experta en crear estructuras impresionantes.' },
    { nombre: 'Enderman', rol: 'Misterioso', descripcion: 'Criatura neutral que transporta bloques y aparece en la oscuridad.' },
    { nombre: 'Creeper', rol: 'Explosivo', descripcion: 'Famoso por sorprender a los jugadores y detonar cerca de sus construcciones.' },
    { nombre: 'Villager', rol: 'Comerciante', descripcion: 'Habitante de aldeas que ofrece intercambios de recursos y objetos.' },
    { nombre: 'Zombie', rol: 'Hostil', descripcion: 'Enemigo común que aparece de noche y busca atacar al jugador.' }
  ];
}
