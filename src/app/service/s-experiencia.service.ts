import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExperienciaL } from '../model/experiencia-l';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  URL =  'https://portfoliordgb.herokuapp.com/explab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ExperienciaL[]>{
    return this.httpClient.get<ExperienciaL[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<ExperienciaL>{
    return this.httpClient.get<ExperienciaL>(this.URL + `detail/${id}`)
  }

  public save(experiencia: ExperienciaL): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', experiencia);
  }

  public update(id: number, experiencia: ExperienciaL): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
