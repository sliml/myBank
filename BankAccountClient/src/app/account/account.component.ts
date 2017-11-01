import {Component, ViewChild, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {DealService} from '../service/deal.service';
import {Deal} from '../service/deal';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';


/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: DealService, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Deal[]> {
    const displayDataChanges = [
      this._exampleDatabase.getDeals(),
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      let data = this._exampleDatabase.getDeals().slice();

      data = this.getSortedData(data);

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
  getSortedData(data): Deal[] {
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      [propertyA, propertyB] = [a.date, b.date];

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (-1);

    });
  }
}


@Component({
  selector: 'account',
  styleUrls: ['account.template.css'],
  templateUrl: 'account-form.html',
  providers: [DealService]
})
export class AccountComponent implements OnInit {
  displayedColumns = ['date', 'description', 'amount'];
  //  exampleDatabase: DatabaseComponent = new DatabaseComponent();
  constructor(private service: DealService) {}
  exampleDatabase = this.service.getDeals();
  dataSource: ExampleDataSource | null;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  // spinner configuration

  amount = this.calculBalance();
  color = this.getColor();
  currency = 'EUR';
  mode = 'determinate';
  value = this.amount / 10000 * 100;

  public calculBalance(): number {
    let amount = 0;
    const deals: Deal[] = this.service.getDeals();
    for (const deal of deals) {
      if (deal.description === 'Deposit') {
        amount = amount + Number(deal.amount);
      } else {
        amount = amount - Number(deal.amount);
      }
    }
    return amount;
  }

  public getColor(): string {
    let color = 'primary';
    if (this.amount < 1000) {
      color = 'warn';
    } else if (this.amount >= 1000 && this.amount < 5000) {
      color = 'accent';
    } else {
      color = 'primary';
    }
    return color;
  }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.service, this.paginator);
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Account</title>
          <style>
            table {
              border-collapse: collapse;
            }
            table, th, td {
              border: 1px solid black;
            }
          </style>
        </head>

    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();

  }

}


