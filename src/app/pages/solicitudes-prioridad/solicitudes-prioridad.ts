import { Component, inject } from '@angular/core';
import { Solicitudes } from '../../services/solicitudes';
import { SolicitudesCard } from '../../components/solicitudes-card/solicitudes-card';
import { RouterLink } from '@angular/router';

@Component({
  imports: [SolicitudesCard,RouterLink],
  selector: 'app-solicitudes-prioridad',
  styleUrl: './solicitudes-prioridad.css',
  templateUrl: './solicitudes-prioridad.html',
})
export class SolicitudesPrioridad {
  private solicitudesService = inject(Solicitudes);

  solicitudesConPrioridad = this.solicitudesService.solicitudesConPrioridad;
  totalPrioridadSolicitudes = this.solicitudesService.totalPrioridadSolicitudes;
  cargando = this.solicitudesService.cargando;
  error = this.solicitudesService.error;

}
