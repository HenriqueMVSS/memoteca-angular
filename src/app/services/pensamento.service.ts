import { Pensamento } from './../components/pensamentos/models/pensamentos.models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly url = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(page: number, filtro: string, favorito: boolean): Observable<Pensamento[]> {
    const limitForPage = 6;

    let params = new HttpParams()
      .set('_page', page)
      .set('_limit', limitForPage);

    if (filtro.trim().length > 1)  params = params.set('q', filtro);

    if (favorito) params = params.set('favorito', favorito);

    return this.http.get<Pensamento[]>(this.url, { params });
  }

  adicionar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.url, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const api = `${this.url}/${pensamento.id}`;
    return this.http.put<Pensamento>(api, pensamento);
  }

  favoritarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito == false
      ? (pensamento.favorito = true)
      : (pensamento.favorito = false);

    return this.editar(pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    const api = `${this.url}/${id}`;
    return this.http.delete<Pensamento>(api);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const api = `${this.url}/${id}`;
    return this.http.get<Pensamento>(api);
  }
}
