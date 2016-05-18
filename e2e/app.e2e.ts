import { GlobalRegistrySearchPage } from './app.po';

describe('global-registry-search App', function() {
  let page: GlobalRegistrySearchPage;

  beforeEach(() => {
    page = new GlobalRegistrySearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('global-registry-search works!');
  });
});
