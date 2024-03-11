import { Inject, Injectable } from '@angular/core';
import { Transaction } from '../../models';

import { HttpClient } from '@angular/common/http';
import { Observable, map, merge, toArray } from 'rxjs';
import { DB_HOST_TOKEN } from '../database-host';

const TRANSACTION_ROUTE = '/transactions';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private readonly uri: string;

  constructor(private readonly http: HttpClient, @Inject(DB_HOST_TOKEN) host: string) {
    this.uri = host + TRANSACTION_ROUTE;
  }

  remove(transactions: Transaction[], transaction: Transaction) {
    return transactions.filter((a: any) => transaction.id !== a.id);
  }

  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.uri);
  }

  getAllFromAccount(accountId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.uri + "?from_account_id=" + accountId);
  }

  getAllToAccount(accountId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.uri + "?to_account_id=" + accountId);
  }

  getAllRelatedToAccount(accountId: number): Observable<Transaction[]> {
    const debits = this.getAllFromAccount(accountId);
    const credits = this.getAllToAccount(accountId);

    return merge(debits, credits).pipe(
      toArray(),
      map(arr => arr[0].concat(arr[1])),
      map(all => all.sort((a, b) => a.opened_date.localeCompare(b.opened_date)))
    );
  }

  getItem(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.uri}/${id}`)
  }
}
