import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplayMobileComponent } from './weather-display-mobile.component';

describe('WeatherDisplayMobileComponent', () => {
  let component: WeatherDisplayMobileComponent;
  let fixture: ComponentFixture<WeatherDisplayMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDisplayMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDisplayMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
