import { BankingBalance } from "./BankingBalance";
import { LinksPaginated, MetaPaginated } from "./Shared";

export interface ResponseBankingAccountBalanceList {
  data: Data;
  links: LinksPaginated;
  meta: MetaPaginated;
}

interface Data {
  balances?: BankingBalance[] | null;
}

