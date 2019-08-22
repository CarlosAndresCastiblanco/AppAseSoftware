import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarMecanicosComponent } from './listar-mecanicos/listar-mecanicos.component';
import { GuardarMecanicosComponent } from './guardar-mecanicos/guardar-mecanicos.component';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ListarMecanicosComponent,
    GuardarMecanicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
