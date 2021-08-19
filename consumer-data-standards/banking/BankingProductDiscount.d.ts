import { BankingProductDiscountEligibility } from "./BankingProductDiscountEligibility";
import { DiscountType } from "./enums";

export interface BankingProductDiscount {
  description: string;
  discountType: DiscountType;
  amount?: string;
  balanceRate?: string;
  transactionRate?: string;
  accruedRate?: string;
  feeRate?: string;
  additionalValue?: string;
  additionalInfo?: string;
  additionalInfoUri?: string;
  eligibility?: BankingProductDiscountEligibility[] | null;
}

