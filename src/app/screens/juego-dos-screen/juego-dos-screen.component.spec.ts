import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDosScreenComponent } from './juego-dos-screen.component';

describe('JuegoDosScreenComponent', () => {
  let component: JuegoDosScreenComponent;
  let fixture: ComponentFixture<JuegoDosScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoDosScreenComponent]
    });
    fixture = TestBed.createComponent(JuegoDosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
