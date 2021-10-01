import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() { }
  and;
  or;
  xor;
  bin1;
  bin2;
  binToN2
  binToN1

  //BINARIO A DECIMAL
  getLogic() {
    this.binToN1 = parseInt(this.bin1, 2);
    this.binToN2 = parseInt(this.bin2, 2);
    this.and = this.binToN1 & this.binToN2;
    this.and = this.and.toString(2)
    this.or = this.binToN1 || this.binToN2;
    this.or = this.or.toString(2)
    this.xor = this.binToN1 ^ this.binToN2;
    this.xor = this.or.toString(2)
  }

}
