import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GlobalRegistrySearchAppComponent } from '../app/global-registry-search.component';

beforeEachProviders(() => [GlobalRegistrySearchAppComponent]);

describe('App: GlobalRegistrySearch', () => {
  it('should create the app',
      inject([GlobalRegistrySearchAppComponent], (app: GlobalRegistrySearchAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'global-registry-search works!\'',
      inject([GlobalRegistrySearchAppComponent], (app: GlobalRegistrySearchAppComponent) => {
    expect(app.title).toEqual('global-registry-search works!');
  }));
});
