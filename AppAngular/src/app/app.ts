import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bienvenida } from './bienvenida/bienvenida';
import { Carrusel } from './carrusel/carrusel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bienvenida, Carrusel],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AppAngular');
}
