import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlcDashboardComponent } from './flc-dashboard.component';

describe('FlcDashboardComponent', () => {
  let component: FlcDashboardComponent;
  let fixture: ComponentFixture<FlcDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlcDashboardComponent]
    });
    fixture = TestBed.createComponent(FlcDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
