import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedkingdomNewsComponent } from './unitedkingdom-news.component';

describe('UnitedkingdomNewsComponent', () => {
  let component: UnitedkingdomNewsComponent;
  let fixture: ComponentFixture<UnitedkingdomNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitedkingdomNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitedkingdomNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
