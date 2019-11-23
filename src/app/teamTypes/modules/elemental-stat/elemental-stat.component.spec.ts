import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementalStatComponent } from './elemental-stat.component';

describe('ElementalStatComponent', () => {
  let component: ElementalStatComponent;
  let fixture: ComponentFixture<ElementalStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementalStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementalStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
