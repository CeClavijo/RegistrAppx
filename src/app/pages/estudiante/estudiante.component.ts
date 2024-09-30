import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss'],
})
export class EstudianteComponent {
  username: string = 'ce.clavijo'; // Asigna el nombre del usuario

  constructor(private router: Router) {}

  logout() {
    const confirmLogout = confirm('¿Estás seguro de que quieres cerrar sesión?');
    if (confirmLogout) {
      this.router.navigate(['login']); // Redirige al login
    }
  }
  classes = [
    { name: 'Programación Móvil', section: '002D', porcentaje: '100%' },
    { name: 'Arquitectura', section: '001V',porcentaje: '57%' },
    { name: 'Calidad de Software', section: '003D', porcentaje: '0%' },
  ];
}
