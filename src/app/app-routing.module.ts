import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // Redirige a la ruta de login
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) // Carga el módulo de páginas
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
