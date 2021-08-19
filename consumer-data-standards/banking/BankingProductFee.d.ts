import { BankingProductDiscount } from "./BankingProductDiscount";
import { ProductFeeType } from "./enums";

export interface BankingProductFee {
  name: string;
  feeType: ProductFeeType;
  amount?: string;
  balanceRate?: string;
  transactionRate?: string;
  accruedRate?: string;
  accrualFrequency?: string;
  currency?: string;
  additionalValue?: string;
  additionalInfo?: string;
  additionalInfoUri?: string;
  discounts?: BankingProductDiscount[] | null;
}
