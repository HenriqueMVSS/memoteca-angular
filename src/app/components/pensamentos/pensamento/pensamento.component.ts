import { PensamentoService } from './../../../services/pensamento.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './../models/pensamentos.models';


@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love you Angular',
    autoria: 'rick',
    modelo: 'modelo3',
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService){}

  ngOnInit(): void {
    console.log(this.pensamento.favorito)
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }

    return 'pensamento-p'
  }

  alterarIconeFavorito() : string {

    if(this.pensamento.favorito == false) return 'inativo';

    return 'ativo';
  }

  favoritarPensamento(){
      this.service.favoritarPensamento(this.pensamento).subscribe(() => {
        this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1);
      })
  }
}
