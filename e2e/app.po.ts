export class GlobalRegistrySearchPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('global-registry-search-app h1')).getText();
  }
}
