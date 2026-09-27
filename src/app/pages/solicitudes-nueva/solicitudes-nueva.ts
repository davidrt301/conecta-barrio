import { Component, inject } from '@angular/core';
import { Solicitudes } from '../../services/solicitudes';

@Component({
  imports: [],
  selector: 'app-solicitudes-nueva',
  styleUrl: './solicitudes-nueva.css',
  templateUrl: './solicitudes-nueva.html',
})
export class SolicitudesNueva {

  private solicitudesService = inject(Solicitudes);


  registrarSolicitud(
    evento: SubmitEvent,//es el tipo de evento que se produce cuando un formulario se envía
    inputTitle: HTMLInputElement,
    inputBody: HTMLInputElement,
    inputUserId: HTMLInputElement
  ){
    evento.preventDefault();// Evita que se recargue la página

    if(!inputTitle.value || !inputBody.value || !inputUserId.value){
      alert('Todos los campos son obligatorios');
      return;
    }

    this.solicitudesService.crearSolicitud({
    title: inputTitle.value,
    body: inputBody.value,
    userId:parseInt(inputUserId.value)
  });

  (evento.target as HTMLFormElement ).reset();
  }

}  



