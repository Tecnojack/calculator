import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  sum = 0
  DecBin;
  numBin;
  numDec;
  numDec1
  numDec2
  numHex;
  numOct
  resultDec;
  resultDec1;
  resultDec2;
  resultBin;
  resultHex;
  resultOct
  constructor() { }
  //BINARIO A DECIMAL
  getValue() {
    this.resultBin = parseInt(this.numBin, 2);
  }
  //DECIMAL A BINARIO
  getBinary() {
    this.resultDec = this.numDec.toString(2);
  }
  //HEXAGECIMAL A DECIMAL
  getHexDec() {
    this.resultHex = parseInt(this.numHex, 16);
  }
  //DECIMALA HEXAGECIMAL
  getDecHex() {
    this.resultDec1 = this.numDec1.toString(16);
  }
  getOctDec() {
    this.resultOct =  parseInt(this.numOct, 8);
  }
  //DECIMALA HEXAGECIMAL
  getDecOct() {
    this.resultDec2 = this.numDec2.toString(8);
  }

}
