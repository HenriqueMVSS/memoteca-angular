import { Router } from '@angular/router';
import { PensamentoService } from './../../../services/pensamento.service';
import { Pensamento } from './../models/pensamentos.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  pageActual: number = 1;
  haMaisPensamentos:boolean = true;
  filtro: string = '';
  titulo: string = 'Meu Mural';
  favorito: boolean = false;
  listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService, private router: Router){}

  ngOnInit(): void {
    this.service.listar(this.pageActual, this.filtro, this.favorito).subscribe((result) => {
      this.listaPensamentos = result;
    })
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.pageActual, this.filtro, this.favorito).subscribe(result => {
      this.listaPensamentos.push(...result)
      if(!result.length){
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true;
    this.pageActual = 1;
    this.service.listar(this.pageActual, this.filtro, this.favorito).subscribe(listarPensamento => {
      console.log(listarPensamento)
      this.listaPensamentos = listarPensamento;
    })
  }

  exibirPensamentosFavoritos(){
    this.titulo = 'Meus Favoritos';
    this.favorito = true;
    this.pageActual = 1;
    this.haMaisPensamentos = true;
    this.service.listar(this.pageActual, this.filtro, this.favorito).subscribe(listarPensamentoFavorito => {
      this.listaPensamentos = listarPensamentoFavorito;
      this.listaFavoritos = listarPensamentoFavorito;
    })
  }

  recarregarComponente(){
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl('/listarPensamento');
  }



}
