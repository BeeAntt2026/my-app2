import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Ptb2 } from './ptb2/ptb2';
import { FormsModule } from '@angular/forms';
import { Learndirective } from './learndirective/learndirective';
import { Ex10 } from './ex10/ex10';

@NgModule({
  declarations: [
    App,
    Ptb2,
    Learndirective,
    Ex10
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
