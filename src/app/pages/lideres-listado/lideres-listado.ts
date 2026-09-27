import { Component, inject } from '@angular/core';
import { Lideres } from '../../services/lideres';

@Component({
  imports: [],
  selector: 'app-lideres-listado',
  styleUrl: './lideres-listado.css',
  templateUrl: './lideres-listado.html',
})
export class LideresListado {
  private lideresService = inject(Lideres);

  lideres = this.lideresService.lideres;
  cargando = this.lideresService.cargando;
  error = this.lideresService.error;
}
