import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapanNewsComponent } from './japan-news.component';

describe('JapanNewsComponent', () => {
  let component: JapanNewsComponent;
  let fixture: ComponentFixture<JapanNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapanNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JapanNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
