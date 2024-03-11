import { Injectable } from '@angular/core';
import { Account, Client, Transaction } from '../models';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const DB_HOST = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class BankServicesService {
  private transctionRoute = '/transactions';
  private clientRoute = '/clients';
  private accountRoute = '/accounts';

  constructor(private http: HttpClient) { }

  remove(transactions: Transaction[], transaction: Transaction) {
    return transactions.filter((a: any) => transaction.id !== a.id);
  }

  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(DB_HOST + this.transctionRoute);
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(DB_HOST + this.clientRoute);
  }

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(DB_HOST + this.accountRoute);
  }

  getItem(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${DB_HOST}/${id}`)
  }
}
