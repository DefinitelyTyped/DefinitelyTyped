import { BankingDirectDebit } from "./BankingDirectDebit";
import { LinksPaginated, MetaPaginated } from "./Shared";

export interface ResponseBankingDirectDebitAuthorisationList {
  data: Data;
  links: LinksPaginated;
  meta: MetaPaginated;
}
interface Data {
  directDebitAuthorisations?: BankingDirectDebit[] | null;
}

