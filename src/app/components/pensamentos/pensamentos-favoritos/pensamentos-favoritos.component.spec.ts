import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamentosFavoritosComponent } from './pensamentos-favoritos.component';

describe('PensamentosFavoritosComponent', () => {
  let component: PensamentosFavoritosComponent;
  let fixture: ComponentFixture<PensamentosFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensamentosFavoritosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensamentosFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
