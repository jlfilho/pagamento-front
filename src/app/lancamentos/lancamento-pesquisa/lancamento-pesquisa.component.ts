import { LancamentoService } from './../lancamento.service';
import { Component } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';


export interface Lancamento {
  pessoa: string;
  descricao: string;
  tipo: string;
  dataVencimento: Date;
  dataPagamento: Date | null;
  valor: number;
}


@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent {
  listaLancamento = new MatTableDataSource<Lancamento>();

  constructor(private lancamentoService: LancamentoService) { }

  public pesquisarLancamentos() {
    this.lancamentoService.pesquisar().subscribe(
      {
      next: (res) => {
        console.log(res.content);
      },
      error: (error) => console.log(error)
  });
  }

}
