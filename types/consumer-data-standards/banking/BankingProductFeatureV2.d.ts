/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductFeatureV2 {
  /**
   * The type of feature described
   */
  featureType:
    | "ADDITIONAL_CARDS"
    | "BALANCE_TRANSFERS"
    | "BILL_PAYMENT"
    | "BONUS_REWARDS"
    | "CARD_ACCESS"
    | "CASHBACK_OFFER"
    | "COMPLEMENTARY_PRODUCT_DISCOUNTS"
    | "DIGITAL_BANKING"
    | "DIGITAL_WALLET"
    | "DONATE_INTEREST"
    | "EXTRA_REPAYMENTS"
    | "FRAUD_PROTECTION"
    | "FREE_TXNS"
    | "FREE_TXNS_ALLOWANCE"
    | "GUARANTOR"
    | "INSURANCE"
    | "INSTALMENT_PLAN"
    | "INTEREST_FREE"
    | "INTEREST_FREE_TRANSFERS"
    | "LOYALTY_PROGRAM"
    | "NOTIFICATIONS"
    | "NPP_ENABLED"
    | "NPP_PAYID"
    | "OFFSET"
    | "OTHER"
    | "OVERDRAFT"
    | "REDRAW"
    | "RELATIONSHIP_MANAGEMENT"
    | "UNLIMITED_TXNS";
  /**
   * Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)
   */
  additionalValue?: string;
  /**
   * Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER
   */
  additionalInfo?: string;
  /**
   * Link to a web page with more information on this feature
   */
  additionalInfoUri?: string | null;
  [k: string]: unknown;
}
