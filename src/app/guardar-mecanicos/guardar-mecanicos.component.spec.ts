import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarMecanicosComponent } from './guardar-mecanicos.component';

describe('GuardarMecanicosComponent', () => {
  let component: GuardarMecanicosComponent;
  let fixture: ComponentFixture<GuardarMecanicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarMecanicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarMecanicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
