import { BankingTransactionStatus, BankingTransactionType } from "./enums";

export interface BankingTransaction {
  accountId: string;
  transactionId?: string;
  isDetailAvailable: boolean;
  type: BankingTransactionType;
  status: BankingTransactionStatus;
  description: string;
  postingDateTime?: string;
  valueDateTime?: string;
  executionDateTime?: string;
  amount: string;
  currency?: string;
  reference: string;
  merchantName?: string;
  merchantCategoryCode?: string;
  billerCode?: string;
  billerName?: string;
  crn?: string;
  apcaNumber?: string;
}
