import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePageable } from '../shared/model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private pessoaUrl = "http://localhost:8080/pessoas"


  constructor(private http: HttpClient) { }

  public listaTodas(ativo?: boolean): Observable<ResponsePageable> {
    let auth_token = "YWRtaW5AdWVhLmVkdS5icjphZG1pbg==";
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth_token}`
      });

    let params = new HttpParams();
    if(ativo===true) {
      params = params.set('ativo', true);
    }
    if(ativo===false) {
      params = params.set('ativo', false);
    }

    return this.http.get<ResponsePageable>(`${this.pessoaUrl}`, {headers, params}).pipe(
      res => res,
      error => error
    );
  }
}
