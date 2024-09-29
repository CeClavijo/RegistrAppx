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
}
