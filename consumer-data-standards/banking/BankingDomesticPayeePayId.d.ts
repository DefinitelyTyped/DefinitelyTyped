import { PayeeIdType } from "./enums";

export interface BankingDomesticPayeePayId {
  name?: string;
  identifier: string;
  type: PayeeIdType;
}
