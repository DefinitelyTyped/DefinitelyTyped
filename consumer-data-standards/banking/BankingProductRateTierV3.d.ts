import { RateApplicationMethodType, UnitOfMeasureType } from "./enums";
import { BankingProductRateCondition } from "./BankingProductRateCondition"

export interface BankingProductRateTierV3 {
  name: string;
  unitOfMeasure: UnitOfMeasureType;
  minimumValue: number;
  maximumValue?: number;
  rateApplicationMethod?: RateApplicationMethodType;
  applicabilityConditions?: BankingProductRateCondition;
  additionalInfo?: string;
  additionalInfoUri?: string;
}

