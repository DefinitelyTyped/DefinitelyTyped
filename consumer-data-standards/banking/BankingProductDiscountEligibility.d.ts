import { DiscountEligibilityType } from "./enums";

export interface BankingProductDiscountEligibility {
  discountEligibilityType: DiscountEligibilityType;
  additionalValue?: string;
  additionalInfo?: string;
  additionalInfoUri?: string;
}
