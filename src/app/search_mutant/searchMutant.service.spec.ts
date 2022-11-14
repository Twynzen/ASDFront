import { TestBed } from '@angular/core/testing';

import { SearchMutantService } from './searchMutant.service';

describe('Search_MutantService', () => {
  let service: SearchMutantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchMutantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
