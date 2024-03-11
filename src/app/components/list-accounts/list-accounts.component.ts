import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Account, Transaction } from 'src/app/models';
import { TransactionsService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnChanges {
  @Input() accounts: Account[] = [];
  transactions: Transaction[] = [];
  currentAccount: number | null = null;

  constructor(private readonly transactionService: TransactionsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.transactions = [];
    this.currentAccount = null;
  }

  setAccount(id: number) {
    this.transactionService.getAllRelatedToAccount(id)
      .subscribe(t => {
        this.transactions = t;
        this.currentAccount = id;
      });
  }
}
