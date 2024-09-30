import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss'],
})
export class ProfesorComponent {
  username: string = 'hel.bustos'; // Asigna el nombre del usuario

  constructor(private router: Router) {}

  logout() {
    const confirmLogout = confirm('¿Estás seguro de que quieres cerrar sesión?');
    if (confirmLogout) {
      this.router.navigate(['login']); // Redirige al login
    }
  }
}

