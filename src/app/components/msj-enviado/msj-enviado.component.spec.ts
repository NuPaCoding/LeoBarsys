import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjEnviadoComponent } from './msj-enviado.component';

describe('MsjEnviadoComponent', () => {
  let component: MsjEnviadoComponent;
  let fixture: ComponentFixture<MsjEnviadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsjEnviadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsjEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
