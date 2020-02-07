import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {
  public events;
  constructor() { }

  ngOnInit() {
    this.events = [
      {
        id: 0,
        price: '$1000.00',
        invoice: '4321',
        date: '12/12/19',
      },
      {
        id: 1,
        price: '800.00',
        invoice: '2341',
        date: '01/12/19',
      },
      {
        id: 2,
        price: '800.00',
        invoice: '4032',
        date: '01/11/19',
      },
      {
        id: 3,
        price: '600.00',
        invoice: '2041',
        date: '12/11/19',
      }
    ];
  }

  chkEvenOdd(index){
    if(index % 2) {
      return true;
    }
  }

}
