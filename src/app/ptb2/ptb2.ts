import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb2',
  standalone: false,
  templateUrl: './ptb2.html',
  styleUrl: './ptb2.css',
})
export class Ptb2 {
  hsa: string = "";
  hsb: string = "";
  hsc: string = "";
  result: string = "Kết quả hiện thị ở đây";

  get_solution() {
    let a = parseFloat(this.hsa);
    let b = parseFloat(this.hsb);
    let c = parseFloat(this.hsc);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      this.result = "Vui lòng nhập số";
      return;
    }

    if (a === 0) {
      if (b === 0) {
        if (c === 0) {
          this.result = "Phương trình có vô số nghiệm";
        } else {
          this.result = "Phương trình vô nghiệm";
        }
      } else {
        let x = -c / b;
        this.result = "x = " + x.toFixed(2);
      }
    } else {
      let delta = b * b - 4 * a * c;
      if (delta < 0) {
        this.result = "Phương trình vô nghiệm (Δ < 0)";
      } else if (delta === 0) {
        let x = -b / (2 * a);
        this.result = "x = " + x.toFixed(2);
      } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        this.result = "x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2);
      }
    }
  }

  clear_solution() {
    this.hsa = "";
    this.hsb = "";
    this.hsc = "";
    this.result = "Kết quả hiện thị ở đây";
  }
}
