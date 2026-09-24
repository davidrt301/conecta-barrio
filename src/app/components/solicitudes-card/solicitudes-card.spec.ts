import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudesCard } from './solicitudes-card';

describe('SolicitudesCard', () => {
  let component: SolicitudesCard;
  let fixture: ComponentFixture<SolicitudesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudesCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudesCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
