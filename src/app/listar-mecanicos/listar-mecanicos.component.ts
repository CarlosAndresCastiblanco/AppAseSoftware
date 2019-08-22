import { Component, OnInit } from '@angular/core';
import { Mecanico } from '../models/mecanico';
import { ApiTestService } from '../services/api-test.service';

@Component({
  selector: 'app-listar-mecanicos',
  templateUrl: './listar-mecanicos.component.html',
  styleUrls: ['./listar-mecanicos.component.css']
})
export class ListarMecanicosComponent implements OnInit {

  mecanicos:Mecanico[] = [];
  constructor(private api:ApiTestService) { }

  ngOnInit() {
    this.getMecanicos();
  }

  getMecanicos(){
    this.api.getMecanicos().subscribe((mecas:Mecanico[]) => {this.mecanicos = mecas}) ;
  }

}
