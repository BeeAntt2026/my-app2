import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Learndirective } from './learndirective/learndirective';
import { ListCustomer } from './list-customer/list-customer';
import { ListCustomer2 } from './list-customer-2/list-customer-2';
import { Customerdetail } from './customerdetail/customerdetail';
import { ProductCatalog } from './product-catalog/product-catalog';

@NgModule({
  declarations: [
    App,
    Learndirective,
    ListCustomer,
    ListCustomer2,
    Customerdetail,
    ProductCatalog  // Changed from LunarYear to LunarYearComponent
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