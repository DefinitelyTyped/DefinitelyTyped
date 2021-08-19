import { ProductEligibilityType } from "./enums";

export interface BankingProductEligibility {
  eligibilityType: ProductEligibilityType;
  additionalValue?: string;
  additionalInfo?: string;
  additionalInfoUri?: string;
}
