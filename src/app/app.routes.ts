import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent:() => import('./pages/inicio/inicio').then(m => m.Inicio)
    },
    {
        path: 'lideres',
        loadComponent:() => import('./pages/lideres-listado/lideres-listado').then(function(m){return m.LideresListado})
    },{
        path: 'solicitudes-listado',
        loadComponent:() => import('./pages/solicitudes-listado/solicitudes-listado').then(m => m.SolicitudesListado)    
    },
    {
        path: 'solicitudes-listado/:id',
        loadComponent:() => import('./pages/solicitudes-detalle/solicitudes-detalle').then(m => m.SolicitudesDetalle)
    },{
        path: 'solicitudes/nueva',
        loadComponent:() => import('./pages/solicitudes-nueva/solicitudes-nueva').then(m => m.SolicitudesNueva)
    },
    {
        path: 'solicitudes/prioridad',
        loadComponent:() => import('./pages/solicitudes-prioridad/solicitudes-prioridad').then(m => m.SolicitudesPrioridad)
    }
];
