import { Inject, Injectable } from '@angular/core';
import { Account } from '../../models';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DB_HOST_TOKEN } from '../database-host';

const ACCOUNT_ROUTE = '/accounts';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private readonly uri: string;

  constructor(private readonly http: HttpClient, @Inject(DB_HOST_TOKEN) host: string) {
    this.uri = host + ACCOUNT_ROUTE;
  }

  remove(transactions: Account[], transaction: Account) {
    return transactions.filter((a: any) => transaction.id !== a.id);
  }

  getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.uri);
  }

  getAllFromClient(clientId: number): Observable<Account[]> {
    return this.http.get<Account[]>(this.uri + "?client_id=" + clientId);
  }

  getItem(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.uri}/${id}`)
  }
}
