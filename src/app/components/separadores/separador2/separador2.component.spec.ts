import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Separador2Component } from './separador2.component';

describe('Separador2Component', () => {
  let component: Separador2Component;
  let fixture: ComponentFixture<Separador2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Separador2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Separador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
