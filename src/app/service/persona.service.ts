import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'https://portfoliordgb.herokuapp.com/personas/';

  constructor(private http: HttpClient) { }

public getPersona(): Observable<persona>{    /*observable: angular la utiliza para hacer todas las peticiones acincronas, ej: podemos hacer o definir eventos que se envian al componente hijo y a su vez al componente padre*/
return this.http.get<persona>(this.URL+'traer/perfil');
}

}