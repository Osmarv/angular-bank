import { Component, OnInit } from '@angular/core';

import { BankServicesService } from 'src/app/services/bank-services.service';

import { Client } from 'src/app/models';
import { AccountsService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  clients: Client[] = [];
  currentClient: Client | null = null;

  constructor(
    private readonly bankServices: BankServicesService,
    private readonly accountService: AccountsService
  ) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.bankServices.getAllClients().subscribe((clients) => this.clients = clients)
  }

  getAccounts(client: Client): void {
    this.currentClient = client;
  }
}
