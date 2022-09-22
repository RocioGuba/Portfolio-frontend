import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  public get http(): HttpClient {
    return this._http;
  }
  public set http(value: HttpClient) {
    this._http = value;
  }
  URL = 'http://localhost:8080/personas/';

  constructor(private _http: HttpClient) { }

  public getPersona(): Observable<persona>{ /*observable: angular la utiliza para hacer todas las peticiones acincronas, ej: podemos hacer o difinir eventos que se envian al componente hijo y a su vez al componente padre*/

    return this._http.get<persona>(this.URL+'traer/perfil');
  }
}
