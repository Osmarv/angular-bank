import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientSummaryComponent } from './components/client-summary/client-summary.component';
import { HeaderComponent } from './components/header/header.component';
import { ListAccountsComponent } from './components/list-accounts/list-accounts.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { ListTransactionsComponent } from './components/list-transactions/list-transactions.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TransactionSummaryComponent } from './components/transaction-summary/transaction-summary.component';
import { DB_HOST_TOKEN } from './services/database-host';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ListTransactionsComponent,
    ListAccountsComponent,
    ListClientsComponent,
    ClientSummaryComponent,
    TransactionSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: DB_HOST_TOKEN, useValue: 'http://localhost:3000'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
