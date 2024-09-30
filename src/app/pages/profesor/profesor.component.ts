import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss'],
})
export class ProfesorComponent {
  username: string = 'hel.bustos';
  constructor(private router: Router) {}

  logout() {
    const confirmLogout = confirm('¿Estás seguro de que quieres cerrar sesión?');
    if (confirmLogout) {
      this.router.navigate(['login']);
    }
  }
  classes = [
    { name: 'Programación Móvil', section: '002D' },
    { name: 'Programación Web', section: '001V' },
    { name: 'Programación Backend', section: '003D' },
  ];
  passAttendance(classDetails: any) {

    this.router.navigate(['login/qr-code'], { state: { class: classDetails } });
  }
}

