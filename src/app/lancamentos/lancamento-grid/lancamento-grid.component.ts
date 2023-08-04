import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';

import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { LancamentoFiltro } from 'src/app/shared/model/lancamentoFiltro.model';
import { ResponsePageable } from 'src/app/shared/model/responsePageable.model';
import { LancamentoService } from '../lancamento.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-lancamento-grid',
  templateUrl: './lancamento-grid.component.html',
  styleUrls: ['./lancamento-grid.component.css']
})
export class LancamentoGridComponent implements AfterViewInit{
  displayedColumns: string[] = ['pessoa', 'descricao', 'dataVencimento', 'dataPagamento', 'valor', 'acao'];
  @Input() dataSource: any;
  @Input() responsePageable!: ResponsePageable;
  @Input() filtro!: LancamentoFiltro;

  constructor(
    private lancamentoService: LancamentoService,
    private sharedService: SharedService
  ){}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource!.paginator = this.paginator;
  }

  excluir(codigo: number) {
    console.log(codigo)
    this.lancamentoService.excluir(codigo).subscribe({
      next: (res)  => {
        this.sharedService.mensagemSucesso("Lançamento excluído com sucesso!");
        this.pesquisa();
      },
      error: (error) => {
        this.sharedService.mensagemErro("Erro ao excluir lançamento!");
        console.log(error);
      }
    });
  }



  private pesquisa(){
    this.lancamentoService.pesquisar(this.filtro).subscribe({
      next: (res)  => {
        this.dataSource.data = res.content;
        this.responsePageable = res;
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
  });
  }

  handlePageEvent(event: PageEvent) {
    this.filtro.pagina=event.pageIndex;
    this.filtro.itensPorPagina=event.pageSize;
    this.pesquisa();
  }

}
