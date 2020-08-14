import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AutoHideToolbarModule } from 'auto-hide-toolbar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AutoHideToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
