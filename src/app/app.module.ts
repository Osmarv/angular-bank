import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListAccountsComponent } from './components/list-accounts/list-accounts.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { ListTransactionsComponent } from './components/list-transactions/list-transactions.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DB_HOST_TOKEN } from './services/database-host';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainContainerComponent,
    ListTransactionsComponent,
    ListAccountsComponent,
    ListClientsComponent
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
