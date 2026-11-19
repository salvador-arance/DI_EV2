import { Injectable, Service, signal } from '@angular/core';
import { ContactModel } from '../models/ContactModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
  
  private apiUrl = 'https://6790ccf7af8442fd7377c747.mockapi.io/contacts';

  private contactosRealizados = signal<ContactModel[]>([]);

  constructor(private http: HttpClient) {}

  // Petición GET → devuelve un Observable (los datos llegarán "más tarde")
  getContactos(): Observable<ContactModel[]> {
    return this.http.get<ContactModel[]>(this.apiUrl);
  }

  // Pide los contactos a la API y los mete en el signal
  cargarContactos() {
    this.getContactos().subscribe({
      next: lista => this.contactosRealizados.set(lista),
      error: error => console.error('Error al cargar los contactos', error)
    });
  }

  anadirContacto(contacto: ContactModel) {
    // Usamos .update() creando un nuevo array para que Angular detecte el cambio
    this.contactosRealizados.update(listaActual => [...listaActual, contacto]);
  }

  listarContactos(): ContactModel[] {
    return this.contactosRealizados();
  }
}
