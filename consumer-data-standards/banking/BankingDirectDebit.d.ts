import { BankingAuthorisedEntity } from "./BankingAuthorisedEntity";

export interface BankingDirectDebit {
  accountId: string;
  authorisedEntity: BankingAuthorisedEntity;
  lastDebitDateTime?: string;
  lastDebitAmount?: string;
}

