import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Customerservice {
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
  get_customer_detail(id: string) {
    let c=this.customers.find(x=>x.id==id);
    return c;
  }

}
