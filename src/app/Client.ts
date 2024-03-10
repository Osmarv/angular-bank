import { Account } from "./Account";

export interface Client{
    id: number;
    name: string;
    accounts: Account[];
    type: string;
    amount: number;
    status: string;
    timestamp: Date;
}
