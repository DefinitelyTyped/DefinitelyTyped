import { BankingDomesticPayeeAccount } from "./BankingDomesticPayeeAccount";
import { BankingDomesticPayeeCard } from "./BankingDomesticPayeeCard";
import { BankingDomesticPayeePayId } from "./BankingDomesticPayeePayId";
import { PayeeAccountUType } from "./enums";

export interface BankingDomesticPayee {
  payeeAccountUType: PayeeAccountUType;
  account?: BankingDomesticPayeeAccount;
  card?: BankingDomesticPayeeCard;
  payId?: BankingDomesticPayeePayId;
}

