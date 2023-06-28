import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlcFormCreateComponent } from './flc-form-create.component';

describe('FlcFormCreateComponent', () => {
  let component: FlcFormCreateComponent;
  let fixture: ComponentFixture<FlcFormCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlcFormCreateComponent]
    });
    fixture = TestBed.createComponent(FlcFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
