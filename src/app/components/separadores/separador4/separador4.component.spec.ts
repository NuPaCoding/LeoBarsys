import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Separador4Component } from './separador4.component';

describe('Separador4Component', () => {
  let component: Separador4Component;
  let fixture: ComponentFixture<Separador4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Separador4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Separador4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
