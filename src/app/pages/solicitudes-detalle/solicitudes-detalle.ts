import { Component, computed, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Solicitudes } from '../../services/solicitudes';

@Component({
  imports: [RouterLink],
  selector: 'app-solicitudes-detalle',
  styleUrl: './solicitudes-detalle.css',
  templateUrl: './solicitudes-detalle.html',
})
export class SolicitudesDetalle {
  @Input() id = '';

  private solicitud = inject(Solicitudes);

  solicitudesDetalle = computed(()=> this.solicitud.solicitudes().find(s => s.id === Number(this.id)));
}
