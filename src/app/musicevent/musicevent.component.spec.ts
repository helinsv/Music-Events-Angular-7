import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiceventComponent } from './musicevent.component';

describe('MusiceventComponent', () => {
  let component: MusiceventComponent;
  let fixture: ComponentFixture<MusiceventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusiceventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusiceventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
