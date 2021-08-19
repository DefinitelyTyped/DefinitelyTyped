import { BankingTransactionDetail } from "./BankingTransactionDetail";
import { LinksPaginated, MetaPaginated } from "./Shared";

export interface BankingTransactionList {
  data: RespTransList;
  links: LinksPaginated;
  meta: MetaPaginated;
}
interface RespTransList {
  transactions?: BankingTransactionDetail[] | null;
}
