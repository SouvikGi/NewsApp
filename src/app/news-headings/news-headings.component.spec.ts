import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHeadingsComponent } from './news-headings.component';

describe('NewsHeadingsComponent', () => {
  let component: NewsHeadingsComponent;
  let fixture: ComponentFixture<NewsHeadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsHeadingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsHeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
