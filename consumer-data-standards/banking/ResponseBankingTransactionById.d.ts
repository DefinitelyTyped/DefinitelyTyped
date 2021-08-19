import { BankingTransactionDetail } from "./BankingTransactionDetail";
import { Links, Meta } from "./Shared";

export interface ResponseBankingTransactionById {
  data: BankingTransactionDetail;
  links: Links;
  meta?: Meta;
}
