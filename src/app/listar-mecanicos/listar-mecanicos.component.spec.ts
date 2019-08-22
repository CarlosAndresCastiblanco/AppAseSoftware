import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMecanicosComponent } from './listar-mecanicos.component';

describe('ListarMecanicosComponent', () => {
  let component: ListarMecanicosComponent;
  let fixture: ComponentFixture<ListarMecanicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMecanicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMecanicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
