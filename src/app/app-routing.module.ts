import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardarMecanicosComponent } from './guardar-mecanicos/guardar-mecanicos.component';
import { ListarMecanicosComponent } from './listar-mecanicos/listar-mecanicos.component';


const routes: Routes = [  { path:'listar',component:ListarMecanicosComponent}, { path:'guardar', component:GuardarMecanicosComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
