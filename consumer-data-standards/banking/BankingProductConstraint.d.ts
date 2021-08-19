import { ProductConstraintType } from "./enums";

export interface BankingProductConstraint {
  constraintType: ProductConstraintType;
  additionalValue?: string;
  additionalInfo?: string;
  additionalInfoUri?: string;
}
