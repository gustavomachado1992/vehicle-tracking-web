import { TestBed } from '@angular/core/testing';

import { VehicleTrackingService } from './vehicle-tracking.service';

describe('VehicleTrackingService', () => {
  let service: VehicleTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
