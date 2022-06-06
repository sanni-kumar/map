import { TestBed } from '@angular/core/testing';

import { ReplayDataService } from './replay-data.service';

describe('ReplayDataService', () => {
  let service: ReplayDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplayDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
