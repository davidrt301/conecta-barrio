import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SolicitudesCard } from './components/solicitudes-card/solicitudes-card';

@Component({
  imports: [RouterOutlet, SolicitudesCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  nombreClinica = 'VetCare';
  mascotas = [
    { nombre: 'Firulais', especie: 'Perro', edad: 4 },
    { nombre: 'Michi', especie: 'Gato', edad: 2 },
    { nombre: 'Rocky', especie: 'Perro', edad: 6 }
  ];}
