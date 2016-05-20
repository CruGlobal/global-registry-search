import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SearchDataService } from './search-data.service';

describe('SearchData Service', () => {
  beforeEachProviders(() => [SearchDataService]);

  it('should ...',
      inject([SearchDataService], (service: SearchDataService) => {
    expect(service).toBeTruthy();
  }));
});
