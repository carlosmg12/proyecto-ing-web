import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CrearTicketComponent } from './components/crear-ticket/crear-ticket.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListaTicketsComponent } from './components/lista-tickets/lista-tickets.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { EditarTicketComponent } from './components/editar-ticket/editar-ticket.component';
import { MisTicketsComponent } from './components/mis-tickets/mis-tickets.component';
import { InterfaceAdminComponent } from './components/interface-admin/interface-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { InterfazUsuarioComponent } from './components/interfaz-usuario/interfaz-usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxCaptchaModule } from 'ngx-captcha';
import { BuscadorPipe } from './pipes/buscador.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CrearTicketComponent,
    RegistroComponent,
    ListaTicketsComponent,
    ListaUsuariosComponent,
    EditarTicketComponent,
    MisTicketsComponent,
    InterfaceAdminComponent,
    InterfazUsuarioComponent,
    BuscadorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
