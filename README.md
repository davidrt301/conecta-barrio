# ConectaBarrio

Aplicación web para gestionar las solicitudes de una comunidad: consultarlas, buscarlas, registrar nuevas, marcarlas como prioritarias y revisar el listado de líderes comunitarios.

Es un frontend desarrollado con Angular que consume una API REST pública (JSONPlaceholder) como fuente de datos de demostración.

## Funcionalidades

- **Listado de solicitudes** con buscador por título.
- **Detalle de solicitud** accesible desde cada tarjeta.
- **Registro de solicitudes** mediante formulario con validación de campos obligatorios.
- **Solicitudes prioritarias**: marcado y desmarcado desde cada tarjeta, con vista dedicada.
- **Listado de líderes** en formato de tabla (nombre, correo, teléfono, ciudad y compañía).
- **Estados de carga y error** visibles en cada vista que consume datos.
- **Navegación responsive** con menú colapsable.

## Stack tecnológico

| Categoría | Tecnología |
|---|---|
| Framework | Angular 22 (componentes standalone, control flow `@if` / `@for`) |
| Lenguaje | TypeScript |
| Estado | Angular Signals |
| HTTP | `HttpClient` + RxJS |
| Pruebas | Vitest |
| Formato | Prettier y EditorConfig |
| Datos | [JSONPlaceholder](https://jsonplaceholder.typicode.com) |

## Requisitos previos

- Node.js y npm en una versión compatible con Angular 22
- Angular CLI (opcional; el proyecto lo incluye como dependencia de desarrollo)

## Instalación y ejecución

```bash
git clone <url-del-repositorio>
cd conecta-barrio
npm install
npm start
```

La aplicación queda disponible en `http://localhost:4200/` y se recarga automáticamente al guardar cambios.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el build de producción en `dist/` |
| `npm run watch` | Compila en modo desarrollo y observa cambios |
| `npm test` | Ejecuta las pruebas unitarias con Vitest |

## Rutas

| Ruta | Vista |
|---|---|
| `/` | Inicio |
| `/solicitudes-listado` | Listado de solicitudes con buscador |
| `/solicitudes-listado/:id` | Detalle de una solicitud |
| `/solicitudes/nueva` | Formulario de nueva solicitud |
| `/solicitudes/prioridad` | Solicitudes marcadas como prioritarias |
| `/lideres` | Listado de líderes |

Todas las páginas se cargan de forma diferida (*lazy loading*).

## Arquitectura

```
src/app/
├── components/
│   └── solicitudes-card/        # Tarjeta de resumen de una solicitud
├── models/                      # Interfaces: Solicitud, SolicitudNueva, Lider
├── pages/
│   ├── inicio/
│   ├── lideres-listado/
│   ├── solicitudes-listado/
│   ├── solicitudes-detalle/
│   ├── solicitudes-nueva/
│   └── solicitudes-prioridad/
├── services/                    # Acceso a datos y estado compartido
├── app.config.ts                # Configuración global (router)
└── app.routes.ts                # Definición de rutas
```

### Responsabilidades

| Pieza | Responsabilidad | No debería |
|---|---|---|
| `App` | Contenedor raíz: barra de navegación y `router-outlet` | Contener lógica de negocio ni llamadas HTTP |
| `app.routes` | Definir la navegación entre páginas | Incluir lógica de servicios o de presentación |
| Páginas (`pages/*`) | Componer cada vista y conectar servicios con plantillas | Realizar peticiones HTTP directas |
| `SolicitudesCard` | Mostrar el resumen de una solicitud y alternar su prioridad | Cargar o modificar la colección de solicitudes |
| `Solicitudes` (servicio) | Cargar, crear y gestionar la prioridad de solicitudes | Manejar formularios, navegación o datos de líderes |
| `Lideres` (servicio) | Cargar el listado de líderes | Incluir lógica de solicitudes o de componentes |
| Modelos | Describir la estructura de los datos | Contener lógica de Angular o de interfaz |

### Gestión de estado

Los servicios `Solicitudes` y `Lideres` están provistos en la raíz y exponen su estado como *signals* de solo lectura (`solicitudes`, `lideres`, `cargando`, `error`). Los componentes derivan el resto con `computed`, por ejemplo el filtrado por búsqueda y la lista de solicitudes prioritarias.

## API

| Recurso | Endpoint | Operaciones |
|---|---|---|
| Solicitudes | `https://jsonplaceholder.typicode.com/posts` | `GET`, `POST` |
| Líderes | `https://jsonplaceholder.typicode.com/users` | `GET` |

JSONPlaceholder simula las escrituras: una solicitud creada con `POST` se agrega a la lista local de la sesión, pero no se persiste en el servidor. Las prioridades tampoco se guardan y se pierden al recargar la página.
