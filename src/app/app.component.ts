import { Component } from '@angular/core';
import { Mecanico } from './models/mecanico';
import { ApiTestService } from './services/api-test.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAsesoftwareFront';

  constructor(private api:ApiTestService){  }

  test(){
    let mecanico:Mecanico = {
      tipoDocumento:"C",
      documento: 152346,
      primerNombre: "Carlos",
      segundoNombre: "Andrés",
      primerApellido: "Rodriguez",
      segundoApellido: "Caro",
      celular: "3193709808",
      direccion: "Cra 53",
      email: "andres@lits.com",
      estado: "D",
      tiempo: 1200
    } 

    this.api.saveMecanicos(mecanico).subscribe((meca:Mecanico) => {console.log(meca)});
    console.log ("hola mundo");
  }

  listar(){
    this.api.getMecanicos().subscribe((mecanicos:Mecanico[]) => { console.log(mecanicos)});
  }

}
