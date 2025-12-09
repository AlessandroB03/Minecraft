import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact } from './contact';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Contact Component', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the contact form with 4 controls', () => {
    expect(component.contactForm.contains('nombre')).toBeTrue();
    expect(component.contactForm.contains('email')).toBeTrue();
    expect(component.contactForm.contains('asunto')).toBeTrue();
    expect(component.contactForm.contains('mensaje')).toBeTrue();
  });

  it('should mark form as invalid if fields are empty', () => {
    component.contactForm.setValue({ nombre: '', email: '', asunto: '', mensaje: '' }); 
    expect(component.contactForm.invalid).toBeTrue();
  });

  it('should validate email format', () => {
    component.contactForm.controls['email'].setValue('invalid-email');
    expect(component.contactForm.controls['email'].valid).toBeFalse();
  });

  it('should reset form on cancel', () => {
    component.contactForm.controls['nombre'].setValue('Kevin');
    component.cancelar();
    expect(component.contactForm.controls['nombre'].value).toBeNull();
  });
});