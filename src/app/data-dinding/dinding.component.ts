import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-dinding',
  templateUrl: './dinding.component.html',
  styleUrls: ['./dinding.component.scss']
})
export class DataDindingComponent implements OnInit {

  public productName: string;
  public brand: string;
  public price: number;
  public qty: number;
  public isShowProduct: boolean;

  public productList: Array<string>;
  public selectProduct: string;

  constructor() { }

  ngOnInit(): void {
    this.productName = 'LG Printer LF567';
    this.brand = 'LG';
    this.price = 4000;
    this.qty = 20;
    this.isShowProduct = false;
    this.selectProduct = 'camera';
    this.productList = [
      'camera',
      'camera1',
      'camera2',
      'camera3',
      'camera4',
      'camera5',
      'camera6',
    ];
  }

  onValueChage(): void {
    console.log('isShowProduct', this.isShowProduct);
  }

}
