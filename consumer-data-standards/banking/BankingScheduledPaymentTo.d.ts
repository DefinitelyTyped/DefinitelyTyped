import { BankingBillerPayee } from "./BankingBillerPayee";
import { BankingDomesticPayee } from "./BankingDomesticPayee";
import { BankingInternationalPayee } from "./BankingInternationalPayee";

export interface BankingScheduledPaymentTo {
  toUType: string;
  accountId?: string;
  payeeId?: string;
  nickname?: string;
  payeeReference?: string;
  domestic?: BankingDomesticPayee;
  biller?: BankingBillerPayee;
  international?: BankingInternationalPayee;
}
