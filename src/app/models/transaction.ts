export interface Transaction {
  id?: number;
  from_account_id?: number;
  to_account_id?: number;
  amount?: number;
  status?: string;
  opened_date?: string;
  processing_date?: string;
  finalized_date?: string;
}
