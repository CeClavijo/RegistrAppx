import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ProfesorComponent } from './profesor/profesor.component'; // Importa el componente profesor
import { QrCodeComponent } from './qr-code/qr-code.component';

@NgModule({
  declarations: [
    LoginComponent,
    EstudianteComponent,
    ProfesorComponent,
    QrCodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
