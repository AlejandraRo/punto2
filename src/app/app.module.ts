import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule  } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarinicioComponent } from './components/navbarinicio/navbarinicio.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { Inicio2Component } from './components/inicio2/inicio2.component';
import { NavbarLoginComponent } from './components/navbar-login/navbar-login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DashboardComponent,
    NavbarinicioComponent,
    QuienesComponent,
    Inicio2Component,
    NavbarLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-k0g74i-f.us.auth0.com',
      clientId: 'cick6UiFoi9k0KrNkeXCUibGlzVE1j0q'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
