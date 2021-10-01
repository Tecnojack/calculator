import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }
  sum;
  rest;
  bin1;
  bin2;
  binToN2
  binToN1

  //BINARIO A DECIMAL
  getSum() {
    this.binToN1 = parseInt(this.bin1, 2);
    this.binToN2 = parseInt(this.bin2, 2);
    this.sum = this.binToN1 + this.binToN2;
    this.sum = this.sum.toString(2)
    this.rest = this.binToN1 - this.binToN2;
    this.rest = this.rest.toString(2)
  }


}
