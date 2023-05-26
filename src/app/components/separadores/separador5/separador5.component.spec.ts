import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Separador5Component } from './separador5.component';

describe('Separador5Component', () => {
  let component: Separador5Component;
  let fixture: ComponentFixture<Separador5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Separador5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Separador5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
