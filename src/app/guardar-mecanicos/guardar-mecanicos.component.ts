import { Component, OnInit } from '@angular/core';
import { Mecanico } from '../models/mecanico';
import { ApiTestService } from '../services/api-test.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-guardar-mecanicos',
  templateUrl: './guardar-mecanicos.component.html',
  styleUrls: ['./guardar-mecanicos.component.css']
})


export class GuardarMecanicosComponent implements OnInit {

  mecanico = new Mecanico();

  constructor(private api: ApiTestService) { }

  save(){
    console.log(this.mecanico);
    this.api.saveMecanicos(this.mecanico).subscribe((meca:Mecanico) => {console.log(meca)});
  }
  ngOnInit() {
  }

}
