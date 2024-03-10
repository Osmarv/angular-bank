import { Component, OnInit } from '@angular/core';

import { BankServicesService } from 'src/app/services/bank-services.service';

import { Client } from 'src/app/Client';
import { Account } from 'src/app/Account';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  clients: Client[] = []
  accounts: Account[] = []
  
  constructor(private bankServices: BankServicesService) {
  this.getClients();
  this.getAccounts();
}

ngOnInit(): void {}

getClients(): void{
  this.bankServices.getAllClients().subscribe((clients) => this.clients = clients)
}

getAccounts(): void{
  this.bankServices.getAllAccounts().subscribe((accounts) => this.accounts = accounts)
}
 
}
