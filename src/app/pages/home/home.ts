import { Component } from '@angular/core';
import { Image } from '../../services/images';
import { Images } from '../../services/images';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  imagenes: Image[] = [];

  constructor(private imagesService: Images) {
    this.imagenes = this.imagesService.getImages();
  }
}
