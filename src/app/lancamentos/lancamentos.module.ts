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
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSortModule } from '@angular/material/sort';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoPesquisaComponent } from './lancamento-pesquisa/lancamento-pesquisa.component';
import { LancamentoGridComponent } from './lancamento-grid/lancamento-grid.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LancamentoService } from './lancamento.service';


@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentoPesquisaComponent,
    LancamentoGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatSortModule,

    CurrencyMaskModule

  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentoPesquisaComponent
  ],
  providers: [
    LancamentoService
  ]
})
export class LancamentosModule { }
