import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';


import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PassoaGridComponent } from './passoa-grid/passoa-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { PessoaService } from './pessoa.service';


@NgModule({
  declarations: [
    PessoaCadastroComponent,
    PessoaPesquisaComponent,
    PassoaGridComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    HttpClientModule
  ],
  exports: [
    PessoaCadastroComponent,
    PessoaPesquisaComponent
  ],
  providers: [PessoaService]
})
export class PessoasModule { }
