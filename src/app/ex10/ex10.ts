import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.css',
})
export class Ex10 {
  public name: string = '';
  public address: string = '';

  setDefaultAddress() {
    this.address = '13 Hung Vuong street';
  }
}
