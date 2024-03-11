import { Inject, Injectable } from '@angular/core';
import { Client } from '../../models';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DB_HOST_TOKEN } from '../database-host';

const CLIENT_ROUTE = '/clients';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly uri: string;

  constructor(private readonly http: HttpClient, @Inject(DB_HOST_TOKEN) host: string) {
    this.uri = host + CLIENT_ROUTE;
  }

  remove(transactions: Client[], transaction: Client) {
    return transactions.filter((a: any) => transaction.id !== a.id);
  }

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.uri);
  }

  getItem(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.uri}/${id}`)
  }
}
