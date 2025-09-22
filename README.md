# Crear proyecto en angular comantos terminal
ng version (verificar version)
- ng new nombre-proyecto
- cd nombre-proyecto
- ng serve (inicializar proyecto servidor local)
- ng generate component nombre-componente (generar componentes)


# frontend_angular
Angular es un framework web que permite a los desarrolladores crear aplicaciones rápidas y confiables.
Angular, gestionado por un equipo dedicado de Google, ofrece un amplio conjunto de herramientas, API y bibliotecas para simplificar y optimizar tu flujo de trabajo de desarrollo. Angular te ofrece una plataforma sólida para crear aplicaciones rápidas y fiables que escalan con el tamaño de tu equipo y de tu código fuente

<img width="900" height="450" alt="image" src="https://github.com/user-attachments/assets/00445a30-7bb0-44ad-ac66-8140c5fac275" />

# Arquitectura Web
<img width="750" height="571" alt="image" src="https://github.com/user-attachments/assets/e9e42d09-22a1-416f-84ae-cda6685d96cf" />

# Arquitectura SPA
<img width="417" height="240" alt="image" src="https://github.com/user-attachments/assets/9bd9f77a-1574-4891-90b1-99be2225a603" />

# Arquitectura en Angular 
- Angular se basa en una arquitectura modular y jerarquica
- Todo comienza en un módulo raíz (AppModule o app)
- Una aplicacion está formada por componentes, organizados dentro de módulos
- Angular utiliza el patrón MVC adaptado, donde los componentes controlan la vista y los servicios gestionan la lógica de negocio.

# ¿Qué son los componentes?
Son la unidad fundamental en Angular.
Cada componente incluye: 
- TypeScript (clase): lógica y datos.
- HTML (plantilla): vista.
- CSS/SCCS (estilos): apariencia.
- Spec (.spec.ts): Pruebas unitarias (opcional al inicio).
Se comunican entre sí mediante inputs (entradas) y outputs (eventos).
Se reutilizan para contruir pantallas más complejas

# Ciclo de vida en un componente 
Angular provee hooks para controlar lo que sucede en distintas fases: 
- ngOnInit() -> al inicializarse.
- ngOnChanges() -> cuando cambian las propiedades
- ngOnDestroy() -> cuando se destruye

# Jerarquía de componentes
- Los componentes se organizan como un árbol jerárquíco
- Un componente principal (AppComponent) suele contener otros componentes hijos.
Ejemplo:
- AppComponent -> barra de navegación, contenido, pie de página.
- Dentro del contenido -> HomeComponent, AboutComponent, etc.
