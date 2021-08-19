
import { BankingCreditCardAccount } from "./BankingCreditCardAccount";
import { BankingLoanAccount } from "./BankingLoanAccount";
import { BankingProductDepositRate } from "./BankingProductDepositRate";
import { BankingProductFee } from "./BankingProductFee";
import { BankingTermDepositAccount } from "./BankingTermDepositAccount";
import { BankingProductCategory } from "./enums";
import { BankingProductLendingRateV2} from "./BankingProductLendingRateV2";
import { CommonPhysicalAddress } from "../common/CommonPhysicalAddress";
import { BankingProductFeature } from "./BankingProductFeature";


  export interface BankingAccountDetail {
    accountId: string;
    creationDate?: string;
    displayName: string;
    nickname?: string;
    openStatus?: string;
    isOwned?: boolean;
    maskedNumber: string;
    productCategory: BankingProductCategory;
    productName: string;
    bsb?: string;
    accountNumber?: string;
    bundleName?: string;
    specificAccountUType?: string;
    termDeposit?: BankingTermDepositAccount[] | null;
    creditCard?: BankingCreditCardAccount | null;
    loan?: BankingLoanAccount | null;
    depositRate?: string;
    lendingRate?: string;
    depositRates?: BankingProductDepositRate[] | null;
    lendingRates?: BankingProductLendingRateV2[] | null;
    features?: Feature[] | null;
    fees?: BankingProductFee[] | null;
    addresses?: CommonPhysicalAddress[] | null;
  }

  interface Feature extends BankingProductFeature {
    isActivated: boolean;
  }



