import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaRegreComponent } from './cuenta-regre.component';

describe('CuentaRegreComponent', () => {
  let component: CuentaRegreComponent;
  let fixture: ComponentFixture<CuentaRegreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaRegreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaRegreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
