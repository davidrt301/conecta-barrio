import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudesNueva } from './solicitudes-nueva';

describe('SolicitudesNueva', () => {
  let component: SolicitudesNueva;
  let fixture: ComponentFixture<SolicitudesNueva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudesNueva],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudesNueva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
