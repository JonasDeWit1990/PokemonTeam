import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTypesComponent } from './teamTypes.component';

describe('PokemonComponent', () => {
  let component: TeamTypesComponent;
  let fixture: ComponentFixture<TeamTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
