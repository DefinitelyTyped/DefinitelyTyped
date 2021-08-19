import { BankingBalancePurse } from "./BankingBalancePurse";

export interface BankingBalance {
  accountId: string;
  currentBalance: string;
  availableBalance: string;
  creditLimit?: string;
  amortisedLimit?: string;
  currency?: string;
  purses?: BankingBalancePurse[] | null;
}

