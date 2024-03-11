import { Component, Input } from '@angular/core';
import { map, switchMap } from 'rxjs';

import { Transaction } from 'src/app/models';
import { AccountsService } from 'src/app/services/account/account.service';

import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent {
  @Input() accountId: number | null = null;
  @Input() transactions: Transaction[] = []

  constructor(
    private readonly accountService: AccountsService,
    private readonly clientService: ClientService
  ) { }

  getName(accountId: number) {
    return this.accountService.getItem(accountId)
      .pipe(
        switchMap(acc => this.clientService.getItem(acc.client_id)),
        map(client => client.name),
      );
  }
}
