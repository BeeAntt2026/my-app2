import { Component } from '@angular/core';
import { Customerservice } from '../customerservice';

@Component({
  selector: 'app-list-customer-2',
  standalone: false,
  templateUrl: './list-customer-2.html',
  styleUrl: './list-customer-2.css',
})
export class ListCustomer2 {
  customers: any[] = [];
  constructor(private cs: Customerservice) {
    this.customers = cs.get_all_customers();
  }
}
