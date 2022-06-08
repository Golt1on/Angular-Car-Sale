import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Programımın adeta startup kısmıdır.
// Çalışma esnasında app-modul'ümün ayağa kalkması gerektiğini belirtiyorum.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
