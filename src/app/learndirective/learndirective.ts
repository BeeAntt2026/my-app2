import { Component } from '@angular/core';

@Component({
  selector: 'app-learndirective',
  standalone: false,
  templateUrl: './learndirective.html',
  styleUrl: './learndirective.css',
})
export class Learndirective {
  flagValue: number = 1;
  products: string[] = ["thuốc lá","bóng đá","game"];
  customers: any[] = [
    {"id": "c1", "name": "Nguyễn Văn A", "age": 20, "image": "../../assets/an1.png"},
    {"id": "c2", "name": "Trần Thị B", "age": 21, "image": "../../assets/an2.png"},
    {"id": "c3", "name": "Lê Văn C", "age": 22, "image": "../../assets/an3.jpeg"},
  ];

  changeView() {
    if (this.flagValue === 1) {
      this.flagValue = 2;
    } else {
      this.flagValue = 1;
    }
  }
}
