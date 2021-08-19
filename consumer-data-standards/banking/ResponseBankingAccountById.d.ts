import { BankingAccountDetail } from "./BankingAccountDetail";
import { Links, Meta } from "./Shared";

export interface ResponseBankingAccountById {
  data: BankingAccountDetail;
  links: Links;
  meta?: Meta;
}
