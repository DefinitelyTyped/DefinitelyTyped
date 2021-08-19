import { BankingPayee } from "./BankingPayee";
import { LinksPaginated, MetaPaginated } from "./Shared";

export interface ReponseBankingPayeeList {
  data: RespPayeeList;
  links: LinksPaginated;
  meta: MetaPaginated;
}
interface RespPayeeList {
  payees?: BankingPayee[] | null;
}

