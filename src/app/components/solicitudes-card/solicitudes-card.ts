import { Component, inject, Input, output } from '@angular/core';
import { Solicitudes } from '../../services/solicitudes';

@Component({
  imports: [],
  selector: 'app-solicitudes-card',
  styleUrl: './solicitudes-card.css',
  templateUrl: './solicitudes-card.html',
})
export class SolicitudesCard {

  private solicitudesService = inject(Solicitudes);

  @Input() id= 0;
  @Input() userId = 0;
  @Input() title = '';
  @Input() body = '';
  
  get esPrioridad():boolean{
    return this.solicitudesService.prioridad(this.id);
  }

  alternarPrioridad(): void {
    this.solicitudesService.alternarPrioridad(this.id);
  }



  resetScroll(element: HTMLElement) {
  const start = element.scrollTop;
  const duration = 1500;
  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    element.scrollTop = start * (1 - progress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}
}
