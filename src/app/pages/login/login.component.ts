import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userType: 'estudiante' | 'profesor' = 'estudiante';
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    // Simula una validación simple
    if (this.userType === 'estudiante' && this.username === 'ce.clavijo' && this.password === 'password') {
      console.log('Ingreso exitoso');
      this.router.navigate(['login/estudiante']); // Aquí navegas al componente estudiante
    } else {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }
}
