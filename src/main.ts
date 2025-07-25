import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
//import { HeaderComponent } from './app/header-component/header-component';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
//bootstrapApplication(HeaderComponent);
//we don't do this way anymore cuz we want to construct a component tree 