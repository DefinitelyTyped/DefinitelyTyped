import { BankingProductRateTierV3 } from "./BankingProductRateTierV3";
import { InterestPaymentDueType, LendingRateType, LoanPurposeType, RepaymentType } from "./enums";

export interface BankingProductLendingRateV2 {
  lendingRateType: LendingRateType;
  rate: string;
  comparisonRate?: string;
  calculationFrequency?: string;
  applicationFrequency?: string;
  interestPaymentDue?: InterestPaymentDueType;
  repaymentType?: RepaymentType;
  loanPurpose?: LoanPurposeType;
  tiers?: BankingProductRateTierV3[] | null;
  additionalValue?: string;
  additionalInfo?: string;
  additionalInfoUri?: string;
}

