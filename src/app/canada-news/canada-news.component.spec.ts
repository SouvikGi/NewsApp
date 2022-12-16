import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadaNewsComponent } from './canada-news.component';

describe('CanadaNewsComponent', () => {
  let component: CanadaNewsComponent;
  let fixture: ComponentFixture<CanadaNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanadaNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
