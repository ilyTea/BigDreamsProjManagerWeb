import { TestBed } from '@angular/core/testing';

import { RanduckService } from './randuck.service';

describe('RanduckService', () => {
  let service: RanduckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RanduckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
