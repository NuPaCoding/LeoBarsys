import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaltaPocoComponent } from './falta-poco.component';

describe('FaltaPocoComponent', () => {
  let component: FaltaPocoComponent;
  let fixture: ComponentFixture<FaltaPocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaltaPocoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaltaPocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
