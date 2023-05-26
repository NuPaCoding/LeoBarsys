import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Separador6Component } from './separador6.component';

describe('Separador6Component', () => {
  let component: Separador6Component;
  let fixture: ComponentFixture<Separador6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Separador6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Separador6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
