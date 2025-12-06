import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  cancelar() {
    throw new Error('Method not implemented.');
  }
  contactForm: any;

}
