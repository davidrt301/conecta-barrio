import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-solicitudes-card',
  styleUrl: './solicitudes-card.css',
  templateUrl: './solicitudes-card.html',
})
export class SolicitudesCard {
  @Input() nombre = '';
  @Input() especie = '';
  @Input() edad = 0;
}
