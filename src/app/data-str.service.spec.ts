import { TestBed } from '@angular/core/testing';

import { DataStrService } from './data-str.service';

describe('DataStrService', () => {
  let service: DataStrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
