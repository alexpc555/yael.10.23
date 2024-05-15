import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoDePrivacidadScreenComponent } from './aviso-de-privacidad-screen.component';

describe('AvisoDePrivacidadScreenComponent', () => {
  let component: AvisoDePrivacidadScreenComponent;
  let fixture: ComponentFixture<AvisoDePrivacidadScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisoDePrivacidadScreenComponent]
    });
    fixture = TestBed.createComponent(AvisoDePrivacidadScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
