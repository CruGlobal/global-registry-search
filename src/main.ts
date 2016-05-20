import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { GlobalRegistrySearchAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(GlobalRegistrySearchAppComponent, [HTTP_PROVIDERS]);

