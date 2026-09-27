import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-solicitudes-card',
  styleUrl: './solicitudes-card.css',
  templateUrl: './solicitudes-card.html',
})
export class SolicitudesCard {
  @Input() id= 0;
  @Input() userId = 0;
  @Input() title = '';
  @Input() body = '';

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
