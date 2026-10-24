import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudesPrioridad } from './solicitudes-prioridad';

describe('SolicitudesPrioridad', () => {
  let component: SolicitudesPrioridad;
  let fixture: ComponentFixture<SolicitudesPrioridad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudesPrioridad],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudesPrioridad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
