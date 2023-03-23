import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../../../services/pensamento.service';
import { Pensamento } from './../models/pensamentos.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.scss'],
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  };

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigateByUrl('/listarPensamento');
      });
    }
  }

  cancelar(){
    this.router.navigateByUrl('/listarPensamento');
  }
}
