import { PayeeType } from "./enums";

export interface BankingPayee {
  payeeId: string;
  nickname: string;
  description?: string;
  type: PayeeType;
  creationDate?: string;
}
