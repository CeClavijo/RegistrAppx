import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QrCodeComponent {
  constructor(private router: Router) {}


  goBack() {
    this.router.navigate(['login/profesor']);
  }


  logout() {
    const confirmLogout = confirm('¿Estás seguro de que quieres cerrar sesión?');
    if (confirmLogout) {
      this.router.navigate(['login']);
    }
  }
}
