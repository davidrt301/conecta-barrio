import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service, signal } from '@angular/core';
import { Solicitud, SolicitudNueva } from '../models/solicitud.model';

@Injectable({ providedIn: 'root' })
export class Solicitudes {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  private listaSolicitudes = signal<Solicitud[]>([]);
  private cargandoSignal = signal<boolean>(true);
  private errorSignal = signal<string | null>(null);

  solicitudes = this.listaSolicitudes.asReadonly();
  cargando = this.cargandoSignal.asReadonly();
  error = this.errorSignal.asReadonly();


  constructor() {
    this.cargarSolicitudes();
  }

  cargarSolicitudes() {
    this.cargandoSignal.set(true);
    this.errorSignal.set(null);

    this.http.get<Solicitud[]>(this.apiUrl).subscribe({
        next: (data) => {
            this.listaSolicitudes.set(data);
            this.cargandoSignal.set(false);
        },
        error: () => {
            this.errorSignal.set('Error al cargar las solicitudes');
            this.cargandoSignal.set(false);
        }
    })
  }

  crearSolicitud(nuevaSolicitud: SolicitudNueva) {
    this.http.post<Solicitud>(this.apiUrl, nuevaSolicitud).subscribe({
      next: (data) => {
        this.listaSolicitudes.update(actuales => [...actuales,data]);
      },
      error: () =>{
        this.errorSignal.set('No pudimos crear la solicitud');
      }
    })
  }

}
