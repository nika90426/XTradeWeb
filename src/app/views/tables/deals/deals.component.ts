import { DealsService } from '../../../services/deals.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';

@Component({
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent extends BaseComponent implements OnInit {
  dataSource: any;
  popupVisible = false;

  constructor(public deals: DealsService) {
    super();
  }

  loadData() {
      this.subs.sink = this.deals.getAll()
        .subscribe(
            data => {
              // this.dataSource = query(data).filter(['Disabled', '==', '0']).toArray();
              this.dataSource = data;
            },
            error => {
                const message = JSON.stringify( error.error) + '\n' + error.statusText;
                console.log(message);
            });
  }

  ngOnInit() {
    this.loadData();
  }

}
