import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDropDownComponent } from './type-drop-down.component';

describe('TypeDropDownComponent', () => {
  let component: TypeDropDownComponent;
  let fixture: ComponentFixture<TypeDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
