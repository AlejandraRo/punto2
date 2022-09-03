import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Inicio2Component } from './components/inicio2/inicio2.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { NavbarLoginComponent } from './components/navbar-login/navbar-login.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path:'quienes',component:QuienesComponent},
  {path:'inicio2',component:Inicio2Component},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
