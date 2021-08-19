import { BankingPayeeDetail } from "./BankingPayeeDetail";
import { Links, Meta } from "./Shared";

export interface ReponseBankingPayeeById {
  data: BankingPayeeDetail;
  links: Links;
  meta?: Meta;
}

