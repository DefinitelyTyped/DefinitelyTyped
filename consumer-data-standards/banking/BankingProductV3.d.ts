import { BankingProductCategory } from "./enums";



  export interface BankingProductV3 {
    productId: string;
    effectiveFrom?: string;
    effectiveTo?: string;
    lastUpdated: string;
    productCategory: BankingProductCategory;
    name: string;
    description: string;
    brand: string;
    brandName?: string;
    applicationUri?: string;
    isTailored: boolean;
    additionalInformation?: AdditionalInformation | null;
    cardArt?: CardArt[] | null;
  }

  interface AdditionalInformation {
    overviewUri?: string;
    termsUri?: string;
    eligibilityUri?: string;
    feesAndPricingUri?: string;
    bundleUri?: string;
  }

  export interface CardArt{
    title?: string;
    imageUri: string;
  }


