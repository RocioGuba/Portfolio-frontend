import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaL } from '../model/experiencia-l';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL = 'http://localhost:8080/explab/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ExperienciaL[]>{
    return this.httpClient.get<ExperienciaL[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<ExperienciaL>{
    return this.httpClient.get<ExperienciaL>(this.expURL + `detail/${id}`)
  }

  public save(experiencia: ExperienciaL): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  public update(id: number, experiencia: ExperienciaL): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
