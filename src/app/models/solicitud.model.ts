export interface Solicitud {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface SolicitudNueva {
    userId: number;
    title: string;
    body: string;
}