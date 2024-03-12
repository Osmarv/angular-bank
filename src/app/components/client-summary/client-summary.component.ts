import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Account, Client } from 'src/app/models';
import { AccountsService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-client-summary',
  templateUrl: './client-summary.component.html',
  styleUrls: ['./client-summary.component.css']
})
export class ClientSummaryComponent implements OnChanges {
  @Input() client: Client | null = null;
  clientAccounts: Account[] = [];

  constructor(private readonly accountService: AccountsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.client !== null) {
      this.accountService.getAllFromClient(this.client.id)
        .subscribe(acc => this.clientAccounts = acc);
    }
  }
}
