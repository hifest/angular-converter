import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CurrencyComponent} from "./components/currency/currency.component";
import {HeaderComponent} from "./components/header/header.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
