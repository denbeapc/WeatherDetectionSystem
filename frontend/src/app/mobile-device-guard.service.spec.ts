import { TestBed, inject } from '@angular/core/testing';

import { MobileDeviceGuardService } from './mobile-device-guard.service';

describe('MobileDeviceGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileDeviceGuardService]
    });
  });

  it('should be created', inject([MobileDeviceGuardService], (service: MobileDeviceGuardService) => {
    expect(service).toBeTruthy();
  }));
});
