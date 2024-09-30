import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ProfesorComponent } from './profesor/profesor.component'; // Importa el nuevo componente

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'estudiante',
    component: EstudianteComponent
  },
  {
    path: 'profesor',
    component: ProfesorComponent // Agrega la ruta para el componente de profesor
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
