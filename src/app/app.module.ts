import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ListTransactionsComponent } from './components/list-transactions/list-transactions.component';
import { ListAccountsComponent } from './components/list-accounts/list-accounts.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
