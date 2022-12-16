import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedstatesNewsComponent } from './unitedstates-news.component';

describe('UnitedstatesNewsComponent', () => {
  let component: UnitedstatesNewsComponent;
  let fixture: ComponentFixture<UnitedstatesNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitedstatesNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitedstatesNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
