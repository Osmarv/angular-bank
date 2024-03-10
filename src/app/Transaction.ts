export interface Transaction{
    id: number;
    clientId: number;
    accountId: number;
    type: string;
    amount: number;
    status: string;
    timestamp: Date;
}