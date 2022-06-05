import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularlibrariesComponent } from './angularlibraries.component';

describe('AngularlibrariesComponent', () => {
  let component: AngularlibrariesComponent;
  let fixture: ComponentFixture<AngularlibrariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularlibrariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularlibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
