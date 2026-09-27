import { HttpClient } from '@angular/common/http';
import { Injectable, Service, signal } from '@angular/core';
import { inject } from '@angular/core/primitives/di';
import { Lider } from '../models/lider.model';

@Injectable({ providedIn: 'root' })
export class Lideres {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  private listaLideres = signal<Lider[]>([]);
  private cargandoSignal = signal<boolean>(true);
  private errorSignal = signal<string | null>(null);

  lideres = this.listaLideres.asReadonly();
  cargando = this.cargandoSignal.asReadonly();
  error = this.errorSignal.asReadonly();

  constructor(){
    this.cargarLideres();
  }

  cargarLideres() {
    this.cargandoSignal.set(true);
    this.errorSignal.set(null);
    this.http.get<Lider[]>(this.apiUrl).subscribe({
            next: (data) => {
                this.listaLideres.set(data);
                this.cargandoSignal.set(false);
            },
            error: () => {
                this.errorSignal.set('Error al cargar los líderes');
                this.cargandoSignal.set(false);
            }
        })
  }
}
