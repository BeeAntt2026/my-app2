import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
// import { ptb2 } from './ptb2/ptb2.spec';
// import { Learndirective } from './learndirective/learndirective.component';
// import { Ex10 } from './ex10/ex10.component';
import { LunarYear } from './lunar-year/lunar-year.spec';
import { Learndirective } from './learndirective/learndirective';
import { LunarYearComponent } from './lunar-year/lunar-year';

@NgModule({
  declarations: [
    App,
    Learndirective,
    LunarYearComponent  // Changed from LunarYear to LunarYearComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }