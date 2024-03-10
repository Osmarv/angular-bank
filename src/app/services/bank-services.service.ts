import { Injectable } from '@angular/core';
import { Transaction } from '../Transaction';
import { Client } from '../Client';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../Account';

@Injectable({
  providedIn: 'root',
})
export class BankServicesService {
  private apiUrl = 'http://localhost:3000/transactions';
  private apiUrlClients = 'http://localhost:3000/clients';
    
  constructor(private http: HttpClient) {}

  remove(transactions: Transaction[], transaction: Transaction) {
    return transactions.filter((a:any) => transaction.id !== a.id);
  }

  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrlClients);
  }

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrlClients);
  }
  
  getItem(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiUrl}/${id}`)
  }
}
