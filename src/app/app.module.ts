import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HtModule} from "ht-angular-client";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HtModule.forRoot({token: 'sk_test_2fe3c0c11b993be96afc00e3e5f9f7e1da98ff65', mapType: 'google'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
