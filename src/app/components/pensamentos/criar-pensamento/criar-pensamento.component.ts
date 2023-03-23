import { Router } from '@angular/router';
import { PensamentoService } from './../../../services/pensamento.service';
import { Pensamento } from './../models/pensamentos.models';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ]),
      ],
      modelo: ['modelo1'],
      favorito: [false]
    });
  }

  criarPensamento() {
    if (this.formulario.valid) {
      this.service.adicionar(this.formulario.value).subscribe(
        () => {
          this.router.navigateByUrl('/listarPensamento');
        },
        (error) => console.error(error)
      );
    }
  }

  cancelarPensamento() {
    this.router.navigateByUrl('/listarPensamento');
  }

  habilitarBotao(): string {
      if(this.formulario.valid) {
        return 'botao'
      }

      return 'botao__desabilitado';
  }
}
