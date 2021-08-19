import { PayeeUType } from "./enums";
import { BankingPayee } from "./BankingPayee";
import { BankingDomesticPayee } from "./BankingDomesticPayee";
import { BankingBillerPayee } from "./BankingBillerPayee";
import { BankingInternationalPayee } from "./BankingInternationalPayee";

export interface BankingPayeeDetail extends BankingPayee {
  payeeUType: PayeeUType;
  domestic?: BankingDomesticPayee;
  biller?: BankingBillerPayee;
  international?: BankingInternationalPayee;
}
