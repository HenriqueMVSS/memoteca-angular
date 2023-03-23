import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.scss'],
})
export class BotaoCarregarMaisComponent implements OnInit {
  @Input() haMaisPensamentos: boolean = false;

  ngOnInit(): void {}
}
