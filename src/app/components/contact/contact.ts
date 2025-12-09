import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {

  contactForm!: FormGroup;
  submitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required, Validators.minLength(3)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  cancelar() {
    if (this.submitting) return;
    this.contactForm.reset();
  }

  enviar(): void {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) return;

    this.submitting = true;

    const payload = {
      nombre: this.f['nombre'].value.toString().trim(),
      email: this.f['email'].value.toString().trim(),
      asunto: this.f['asunto'].value.toString().trim(),
      mensaje: this.f['mensaje'].value.toString().trim(),
      createdAt: new Date().toISOString()
    };

    try {
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'contacto.json';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      this.contactForm.reset();
    } catch (err) {
      alert('No fue posible descargar el archivo.');
    } finally {
      this.submitting = false;
    }
  }
}