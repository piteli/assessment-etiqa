import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlcFormEditComponent } from './flc-form-edit.component';

describe('FlcFormEditComponent', () => {
  let component: FlcFormEditComponent;
  let fixture: ComponentFixture<FlcFormEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlcFormEditComponent]
    });
    fixture = TestBed.createComponent(FlcFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
