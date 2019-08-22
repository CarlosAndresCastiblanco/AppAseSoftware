import { Injectable } from '@angular/core';
import { Mecanico } from '../models/mecanico';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiTestService {
  url : String = "http://localhost:8080/";
  
  constructor(private http:HttpClient) { }

  saveMecanicos(mecanico:Mecanico):Observable<Mecanico> {
    return this.http.post<Mecanico>(this.url + "mecanicos/save", mecanico);
  }

  getMecanicos():Observable<Mecanico[]>{
    return this.http.get<Mecanico[]>(this.url + "mecanicos/mecanicos");
  }
}
