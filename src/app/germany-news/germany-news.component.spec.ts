import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanyNewsComponent } from './germany-news.component';

describe('GermanyNewsComponent', () => {
  let component: GermanyNewsComponent;
  let fixture: ComponentFixture<GermanyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GermanyNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
