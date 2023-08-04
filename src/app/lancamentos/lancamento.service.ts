import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../shared/model/responsePageable.model';
import { LancamentoFiltro } from '../shared/model/lancamentoFiltro.model';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  private lancamentoUrl = "http://localhost:8080/lancamentos";

  constructor(private http: HttpClient) { }


  public pesquisar(filtro: LancamentoFiltro): Observable<ResponsePageable> {
    let auth_token = "YWRtaW5AdWVhLmVkdS5icjphZG1pbg==";
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth_token}`
      }
    );
    let params = new HttpParams();

    params = params.set('page', filtro.pagina);
    params = params.set('size', filtro.itensPorPagina);

    if(filtro.descricao) {
      params = params.set('descricao', filtro.descricao);
    }

    if(filtro.dataVencimentoInicio) {
      params = params.set('dataVencimentoDe', filtro.dataVencimentoInicio.toLocaleDateString('sv'));
    }

    if(filtro.dataVencimentoFim) {
      params = params.set('dataVencimentoAte', filtro.dataVencimentoFim.toLocaleDateString('sv'));
    }


    return this.http.get<ResponsePageable>(`${this.lancamentoUrl}`,{headers: headers, params: params})
    .pipe(
      res => res,
      error=> error
    );
  }

}
