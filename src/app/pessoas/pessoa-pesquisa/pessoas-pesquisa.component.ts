import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    {nome: 'Fernando Araujo', cidade: 'Brasília', estado: 'DF', ativo: true},
    {nome: 'Claudemir Tavares', cidade: 'Niteroi', estado: 'RJ', ativo: false},
    {nome: 'Fátima Araujo', cidade: 'Brasília', estado: 'DF', ativo: true},
    {nome: 'João Ricado', cidade: 'Belem', estado: 'PA', ativo: true},
    {nome: 'Alba Valeria', cidade: 'Terezina', estado: 'PI', ativo: false},
    {nome: 'Benjamin Lucas', cidade: 'Fortaleza', estado: 'CE', ativo: true},
    {nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', ativo: true},
    {nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', ativo: false},
    {nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', ativo: true},
    {nome: 'Luis Pereira', cidade: 'Coritiba', estado: 'PR', ativo: true},
    {nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false}
  ];


}
