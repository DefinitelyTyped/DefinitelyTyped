import { BankingProductV3 } from "./BankingProductV3";
import { Links, Meta} from "./Shared";

export interface ResponseBankingProductById {
  data: BankingProductV3;
  links: Links;
  meta?: Meta;
}

