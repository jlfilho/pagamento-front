import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  private lancamentoUrl = "http://localhost:8080/lancamentos";

  constructor(private http: HttpClient) { }


  public pesquisar(): Observable<any> {
    let auth_token = "YWRtaW5AdWVhLmVkdS5icjphZG1pbg==";
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth_token}`
      }
    );

    return this.http.get<any>(`${this.lancamentoUrl}`,{headers: headers})
    .pipe(
      res => res,
      error=> error
    );
  }

}
