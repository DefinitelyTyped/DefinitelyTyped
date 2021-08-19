import { ProductFeatureType } from "./enums";

export interface BankingProductFeature {
  featureType: ProductFeatureType;
  additionalValue?: string;
  additionalInfo?: string;
  additionalInfoUri?: string;
}
