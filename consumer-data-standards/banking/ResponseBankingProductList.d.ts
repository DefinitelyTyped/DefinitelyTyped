
import { BankingProductV3 } from "./BankingProductV3"
import { LinksPaginated, MetaPaginated } from "./Shared";

  export interface BankingProductList {
    data: RespProdList;
    links: LinksPaginated;
    meta: MetaPaginated;
  }
  
  interface RespProdList {
    products?: BankingProductV3[];
  }

  