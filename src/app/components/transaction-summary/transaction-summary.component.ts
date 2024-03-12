import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Transaction } from 'src/app/models';


@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent {
  @Input() accountId: number | null = null;
  @Input() transaction: Transaction | null = null;

  @Output() close: EventEmitter<any> = new EventEmitter();

  get type(): string {
    if (this.accountId === null || this.transaction === null) {
      return 'ERROR ERROR ERROR';
    }

    if (this.transaction.to_account_id == this.accountId) {
      return 'credit';
    }
    return 'debit';
  }

  closePopup() {
    this.close.emit();
  }
}
