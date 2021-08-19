import { BankingAccount } from "./BankingAccount";
import { LinksPaginated, MetaPaginated } from "./Shared";

export interface ResponseBankingAccountList {
  data: RespAccList;
  links: LinksPaginated;
  meta: MetaPaginated;
}
interface RespAccList {
  accounts?: BankingAccount[] | null;
}

