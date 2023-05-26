import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraYLugarComponent } from './hora-y-lugar.component';

describe('HoraYLugarComponent', () => {
  let component: HoraYLugarComponent;
  let fixture: ComponentFixture<HoraYLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoraYLugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoraYLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
