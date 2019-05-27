import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { initFontAwesome } from './utils/font-awesome.util';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


initFontAwesome();


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
