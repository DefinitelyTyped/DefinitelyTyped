import { DepositRateType } from "./enums";
import { BankingProductRateTierV3 } from "./BankingProductRateTierV3";

export interface BankingProductDepositRate {
  depositRateType: DepositRateType;
  rate: string;
  calculationFrequency?: string;
  applicationFrequency?: string;
  tiers?: BankingProductRateTierV3[] | null;
  additionalValue?: string;
  additionalInfo?: string;
  additionalInfoUri?: string;
}

