import { Component } from '@angular/core';
import { SearchBoxComponent } from './search-box';
import { HTTP_PROVIDERS }    from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'global-registry-search-app',
  templateUrl: 'global-registry-search.component.html',
  styleUrls: ['global-registry-search.component.css'],
  directives: [SearchBoxComponent],
  providers:  [
    HTTP_PROVIDERS
  ]
})
export class GlobalRegistrySearchAppComponent {
  title = 'Global Registry Search';
}
