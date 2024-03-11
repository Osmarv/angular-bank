import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAccountsComponent } from './components/list-accounts/list-accounts.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { ListTransactionsComponent } from './components/list-transactions/list-transactions.component';

const routes: Routes = [
  { path: 'clients', component: ListClientsComponent },
  { path: 'accounts', component: ListAccountsComponent },
  { path: 'transactions', component: ListTransactionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
