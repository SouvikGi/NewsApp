import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranceNewsComponent } from './france-news.component';

describe('FranceNewsComponent', () => {
  let component: FranceNewsComponent;
  let fixture: ComponentFixture<FranceNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranceNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranceNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
