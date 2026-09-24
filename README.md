# ConectaBarrio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## distribucion

| Pieza | Responsabilidad única | Dependencias permitidas | Señales de que asume demasiado |
|---|---|---|---|
| `App` | Servir como contenedor raíz de la aplicación. | `RouterOutlet`, configuración general de Angular. | Contiene lógica de solicitudes, líderes, formularios o llamadas HTTP. |
| `app.routes` | Definir la navegación entre páginas. | Componentes de página y guards de navegación. | Incluye llamadas a servicios, reglas de negocio o lógica de presentación. |
| `Inicio` | Presentar la pantalla inicial y accesos principales. | Router y componentes visuales simples. | Carga datos de solicitudes o líderes directamente. |
| `SolicitudesNueva` | Capturar y validar los datos para crear una solicitud. | Modelo `Solicitud`, servicio de solicitudes y controles de formulario. | Envía peticiones HTTP directamente, transforma demasiados datos o gestiona listados. |
| `SolicitudesListado` | Mostrar y filtrar la colección de solicitudes. | Servicio de solicitudes, modelo `Solicitud` y `SolicitudesCard`. | Implementa creación, edición, eliminación o reglas complejas de negocio. |
| `SolicitudesDetalle` | Mostrar la información de una solicitud concreta. | Router, modelo `Solicitud` y servicio de solicitudes. | Gestiona formularios completos, listados relacionados o varias operaciones no vinculadas al detalle. |
| `LideresListado` | Mostrar y filtrar los líderes comunitarios. | Servicio de líderes y modelo `Lider`. | También administra solicitudes o contiene lógica de autenticación y permisos. |
| `SolicitudesCard` | Presentar visualmente el resumen de una solicitud. | Modelo o datos de presentación recibidos por entrada. | Consulta servicios, cambia datos globales o contiene reglas de negocio. |
| `Solicitud` | Representar la estructura y los datos de una solicitud. | Tipos auxiliares o enumeraciones del dominio. | Contiene llamadas HTTP, lógica de interfaz o reglas que dependen de Angular. |
| `Lider` | Representar la estructura y los datos de un líder comunitario. | Tipos auxiliares del dominio. | Gestiona persistencia, navegación o comportamiento visual. |
| `Solicitudes` | Centralizar las operaciones relacionadas con solicitudes. | Cliente HTTP, modelo `Solicitud` y adaptadores de datos. | También controla formularios, navegación, mensajes visuales o datos de líderes. |
| `Lideres` | Centralizar las operaciones relacionadas con líderes. | Cliente HTTP y modelo `Lider`. | Incluye operaciones de solicitudes, autenticación o lógica específica de componentes. |