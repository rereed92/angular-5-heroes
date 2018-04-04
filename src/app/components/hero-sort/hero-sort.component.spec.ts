import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSortComponent } from './hero-sort.component';

describe('HeroSortComponent', () => {
  let component: HeroSortComponent;
  let fixture: ComponentFixture<HeroSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
