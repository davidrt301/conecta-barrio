import { Component, computed, inject, signal } from '@angular/core';
import { Solicitudes } from '../../services/solicitudes';
import { SolicitudesCard } from '../../components/solicitudes-card/solicitudes-card';
import { RouterLink } from '@angular/router';

@Component({
  imports: [SolicitudesCard,RouterLink],
  selector: 'app-solicitudes-listado',
  styleUrl: './solicitudes-listado.css',
  templateUrl: './solicitudes-listado.html',
})
export class SolicitudesListado {
  private solicitudesService = inject(Solicitudes);

  solicitudes = this.solicitudesService.solicitudes;
  cargando = this.solicitudesService.cargando;
  error = this.solicitudesService.error;

  paginaActual = signal(1);
  elementosPorPagina = 10;

  buscar = signal('');

  solicitudesFiltradas = computed(() =>
    this.solicitudes().filter((s) => s.title.toLowerCase().includes(this.buscar().toLowerCase())),
  );

  
}
