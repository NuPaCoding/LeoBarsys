import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaRegresivaNuevaComponent } from './cuenta-regresiva-nueva.component';

describe('CuentaRegresivaNuevaComponent', () => {
  let component: CuentaRegresivaNuevaComponent;
  let fixture: ComponentFixture<CuentaRegresivaNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaRegresivaNuevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaRegresivaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
