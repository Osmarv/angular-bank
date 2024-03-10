import { Component, OnInit } from '@angular/core';

import { Transaction } from 'src/app/Transaction';

import { BankServicesService } from 'src/app/services/bank-services.service';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent implements OnInit {
  transactions: Transaction[] = []
  
    constructor(private bankServices: BankServicesService) {
    this.getTransactions();
  }

  ngOnInit(): void {}

  getTransactions(): void{
    this.bankServices.getAll().subscribe((transactions) => this.transactions = transactions)
  }
}
