import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliaNewsComponent } from './australia-news.component';

describe('AustraliaNewsComponent', () => {
  let component: AustraliaNewsComponent;
  let fixture: ComponentFixture<AustraliaNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AustraliaNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
