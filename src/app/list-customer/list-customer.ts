import { Component } from '@angular/core';

@Component({
  selector: 'app-list-customer',
  standalone: false,
  templateUrl: './list-customer.html',
  styleUrl: './list-customer.css',
})
export class ListCustomer {
  customers = [
    { "id": "c1", "name": 'Alice', "age": 30, "picture": 'images/15.1(1).jpg'},
    { "id": "c2", "name": 'Bob', "age": 25, "picture": 'images/15.1(2).jpg'},
    { "id": "c3", "name": 'Charlie', "age": 35, "picture": 'images/15.1(3).jpg'},
    { "id": "c4", "name": 'an', "age": 20, "picture": 'images/15.1(1).jpg'},
  ]
  constructor() {}
  get_all_customers() {
    return this.customers;
  }
}
