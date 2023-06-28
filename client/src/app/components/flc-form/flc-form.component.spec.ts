import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlcFormComponent } from './flc-form.component';

describe('FlcFormComponent', () => {
  let component: FlcFormComponent;
  let fixture: ComponentFixture<FlcFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlcFormComponent]
    });
    fixture = TestBed.createComponent(FlcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
