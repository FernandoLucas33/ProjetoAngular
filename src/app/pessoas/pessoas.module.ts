import { SharedModule } from './../shared/shared.module';
import { PessoaGridComponent } from './pessoa-grid/pessoa-grid.component';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { TableModule } from 'primeng/table';

import { PessoasPesquisaComponent } from './pessoa-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';



@NgModule({
  declarations: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent,
    PessoaGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    SharedModule
  ],
  exports: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent
  ],
})
export class PessoasModule { }
