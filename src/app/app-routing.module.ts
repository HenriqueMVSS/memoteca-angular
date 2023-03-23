import { PensamentosFavoritosComponent } from './components/pensamentos/pensamentos-favoritos/pensamentos-favoritos.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", redirectTo: "listarPensamento", pathMatch: 'full'},
  {path: "criarPensamento", component: CriarPensamentoComponent },
  {path: "listarPensamento", component: ListarPensamentoComponent},
  {path: "pensamentosFavoritos", component: PensamentosFavoritosComponent},
  {path: "pensamentos/excluirPensamento/:id", component: ExcluirPensamentoComponent},
  {path: "pensamentos/editarPensamento/:id", component: EditarPensamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
