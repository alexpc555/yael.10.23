import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoTerminadoScreensComponent } from './juego-terminado-screens.component';

describe('JuegoTerminadoScreensComponent', () => {
  let component: JuegoTerminadoScreensComponent;
  let fixture: ComponentFixture<JuegoTerminadoScreensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoTerminadoScreensComponent]
    });
    fixture = TestBed.createComponent(JuegoTerminadoScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
