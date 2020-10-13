import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultComponentComponent } from './adult-component.component';

describe('AdultComponentComponent', () => {
  let component: AdultComponentComponent;
  let fixture: ComponentFixture<AdultComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdultComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
