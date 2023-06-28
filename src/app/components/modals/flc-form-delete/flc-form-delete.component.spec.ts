import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlcFormDeleteComponent } from './flc-form-delete.component';

describe('FlcFormDeleteComponent', () => {
  let component: FlcFormDeleteComponent;
  let fixture: ComponentFixture<FlcFormDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlcFormDeleteComponent]
    });
    fixture = TestBed.createComponent(FlcFormDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
