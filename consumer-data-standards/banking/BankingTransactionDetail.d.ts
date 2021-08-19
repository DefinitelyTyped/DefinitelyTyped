import { BankingTransaction } from "./BankingTransaction";
import { BankingTransactionExtensionServiceType, BankingTransactionExtensionUType } from "./enums";

export interface BankingTransactionDetail extends BankingTransaction {
  extendedData: ExtendedData;
}

 interface ExtendedData {
  payer?: string;
  payee?: string;
  extensionUType?: BankingTransactionExtensionUType;
  x2p101Payload?: X2p101Payload;
  service: BankingTransactionExtensionServiceType;
}

interface X2p101Payload {
  extendedDescription: string;
  endToEndId?: string;
  purposeCode?: string;
}
