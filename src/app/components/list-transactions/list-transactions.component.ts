import { Component, Input } from '@angular/core';

import { Transaction } from 'src/app/models';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent {
  @Input() accountId: number | null = null;
  @Input() transactions: Transaction[] = []
  shownTransaction?: number;

  showSummary(transaction: Transaction) {
    this.shownTransaction = undefined;
    this.shownTransaction = transaction.id;
  }

  hideSummary() {
    this.shownTransaction = undefined;
    console.log(this.shownTransaction)
  }
}
