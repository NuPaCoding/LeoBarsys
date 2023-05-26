import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Separador3Component } from './separador3.component';

describe('Separador3Component', () => {
  let component: Separador3Component;
  let fixture: ComponentFixture<Separador3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Separador3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Separador3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
