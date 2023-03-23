import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from './../../../services/pensamento.service';
import { Pensamento } from './../models/pensamentos.models';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss']
})
export class EditarPensamentoComponent implements OnInit{
  // pensamento: Pensamento = {
  //   id: 0,
  //   conteudo: '',
  //   autoria: '',
  //   modelo: '',
  // };

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.formulario = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [pensamento.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [pensamento.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [pensamento.modelo],
        favorito: [pensamento.favorito]
      })
    });
  }

  editarPensamento(){
    if(this.formulario.valid){
      this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigateByUrl('/listarPensamento');
      });
    }
  }

  cancelar(){
    this.router.navigateByUrl('/listarPensamento');
  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return 'botao'
    }

    return 'botao__desabilitado';
}
}
