import { TestBed, inject } from '@angular/core/testing';

import { DataAccessService } from './data-access.service';

describe('DataAccessServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataAccessService]
    });
  });

  it('should ...', inject([DataAccessService], (service: DataAccessService) => {
    expect(service).toBeTruthy();
  }));
});
