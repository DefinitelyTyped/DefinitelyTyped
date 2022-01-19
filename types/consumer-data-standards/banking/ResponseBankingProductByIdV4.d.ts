/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingProductByIdV4 {
  data: {
    /**
     * A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
     */
    productId: string;
    /**
     * The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate
     */
    effectiveFrom?: string | null;
    /**
     * The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products
     */
    effectiveTo?: string | null;
    /**
     * The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)
     */
    lastUpdated: string;
    /**
     * The category to which a product or account belongs. See [here](#product-categories) for more details
     */
    productCategory:
      | "BUSINESS_LOANS"
      | "CRED_AND_CHRG_CARDS"
      | "LEASES"
      | "MARGIN_LOANS"
      | "OVERDRAFTS"
      | "PERS_LOANS"
      | "REGULATED_TRUST_ACCOUNTS"
      | "RESIDENTIAL_MORTGAGES"
      | "TERM_DEPOSITS"
      | "TRADE_FINANCE"
      | "TRANS_AND_SAVINGS_ACCOUNTS"
      | "TRAVEL_CARDS";
    /**
     * The display name of the product
     */
    name: string;
    /**
     * A description of the product
     */
    description: string;
    /**
     * A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required
     */
    brand: string;
    /**
     * An optional display name of the brand
     */
    brandName?: string | null;
    /**
     * A link to an application web page where this product can be applied for.
     */
    applicationUri?: string | null;
    /**
     * Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable
     */
    isTailored: boolean;
    /**
     * Object that contains links to additional information on specific topics
     */
    additionalInformation?: {
      /**
       * General overview of the product
       */
      overviewUri?: string | null;
      /**
       * Terms and conditions for the product
       */
      termsUri?: string | null;
      /**
       * Eligibility rules and criteria for the product
       */
      eligibilityUri?: string | null;
      /**
       * Description of fees, pricing, discounts, exemptions and bonuses for the product
       */
      feesAndPricingUri?: string | null;
      /**
       * Description of a bundle that this product can be part of
       */
      bundleUri?: string | null;
      [k: string]: unknown;
    } | null;
    /**
     * An array of card art images
     */
    cardArt?:
      | {
          /**
           * Display label for the specific image
           */
          title?: string | null;
          /**
           * URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI [RFC 2397](https://tools.ietf.org/html/rfc2397)
           */
          imageUri: string;
          [k: string]: unknown;
        }[]
      | null;
    [k: string]: unknown;
  } & {
    /**
     * An array of bundles that this product participates in.  Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle.  It is assumed that the current product is included in the bundle also
     */
    bundles?:
      | {
          /**
           * Name of the bundle
           */
          name: string;
          /**
           * Description of the bundle
           */
          description: string;
          /**
           * Display text providing more information on the bundle
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on the bundle criteria and benefits
           */
          additionalInfoUri?: string | null;
          /**
           * Array of product IDs for products included in the bundle that are available via the product end points.  Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference end points
           */
          productIds?: string[] | null;
          [k: string]: unknown;
        }[]
      | null;
    /**
     * Array of features available for the product
     */
    features?:
      | {
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
        }[]
      | null;
    /**
     * Constraints on the application for or operation of the product such as minimum balances or limit thresholds
     */
    constraints?:
      | {
          /**
           * The type of constraint described.  See the next section for an overview of valid values and their meaning
           */
          constraintType: "MAX_BALANCE" | "MAX_LIMIT" | "MIN_BALANCE" | "MIN_LIMIT" | "OPENING_BALANCE";
          /**
           * Generic field containing additional information relevant to the [constraintType](#tocSproductconstrainttypedoc) specified.  Whether mandatory or not is dependent on the value of [constraintType](#tocSproductconstrainttypedoc)
           */
          additionalValue?: string;
          /**
           * Display text providing more information the constraint
           */
          additionalInfo?: string;
          /**
           * Link to a web page with more information on the constraint
           */
          additionalInfoUri?: string;
          [k: string]: unknown;
        }[]
      | null;
    /**
     * Eligibility criteria for the product
     */
    eligibility?:
      | {
          /**
           * The type of eligibility criteria described.  See the next section for an overview of valid values and their meaning
           */
          eligibilityType:
            | "BUSINESS"
            | "EMPLOYMENT_STATUS"
            | "MAX_AGE"
            | "MIN_AGE"
            | "MIN_INCOME"
            | "MIN_TURNOVER"
            | "NATURAL_PERSON"
            | "OTHER"
            | "PENSION_RECIPIENT"
            | "RESIDENCY_STATUS"
            | "STAFF"
            | "STUDENT";
          /**
           * Generic field containing additional information relevant to the [eligibilityType](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [eligibilityType](#tocSproducteligibilitytypedoc)
           */
          additionalValue?: string;
          /**
           * Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to OTHER
           */
          additionalInfo?: string;
          /**
           * Link to a web page with more information on this eligibility criteria
           */
          additionalInfoUri?: string | null;
          [k: string]: unknown;
        }[]
      | null;
    /**
     * Fees applicable for the product
     */
    fees?:
      | {
          /**
           * Name of the fee
           */
          name: string;
          /**
           * The type of fee
           */
          feeType:
            | "DEPOSIT"
            | "EVENT"
            | "EXIT"
            | "PAYMENT"
            | "PERIODIC"
            | "PURCHASE"
            | "TRANSACTION"
            | "UPFRONT"
            | "VARIABLE"
            | "WITHDRAWAL";
          /**
           * The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
           */
          amount?: string;
          /**
           * A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.
           */
          balanceRate?: string;
          /**
           * A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
           */
          transactionRate?: string;
          /**
           * A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
           */
          accruedRate?: string;
          /**
           * The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
           */
          accrualFrequency?: string | null;
          /**
           * The currency the fee will be charged in. Assumes AUD if absent
           */
          currency?: string | null;
          /**
           * Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)
           */
          additionalValue?: string;
          /**
           * Display text providing more information on the fee
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this fee
           */
          additionalInfoUri?: string | null;
          /**
           * An optional list of discounts to this fee that may be available
           */
          discounts?:
            | {
                /**
                 * Description of the discount
                 */
                description: string;
                /**
                 * The type of discount. See the next section for an overview of valid values and their meaning
                 */
                discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
                /**
                 * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
                 */
                amount?: string;
                /**
                 * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
                 */
                balanceRate?: string;
                /**
                 * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory
                 */
                transactionRate?: string;
                /**
                 * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
                 */
                accruedRate?: string;
                /**
                 * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
                 */
                feeRate?: string;
                /**
                 * Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)
                 */
                additionalValue?: string;
                /**
                 * Display text providing more information on the discount
                 */
                additionalInfo?: string | null;
                /**
                 * Link to a web page with more information on this discount
                 */
                additionalInfoUri?: string | null;
                /**
                 * Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.
                 */
                eligibility?: {
                  /**
                   * The type of the specific eligibility constraint for a discount
                   */
                  discountEligibilityType:
                    | "BUSINESS"
                    | "EMPLOYMENT_STATUS"
                    | "INTRODUCTORY"
                    | "MAX_AGE"
                    | "MIN_AGE"
                    | "MIN_INCOME"
                    | "MIN_TURNOVER"
                    | "NATURAL_PERSON"
                    | "OTHER"
                    | "PENSION_RECIPIENT"
                    | "RESIDENCY_STATUS"
                    | "STAFF"
                    | "STUDENT";
                  /**
                   * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
                   */
                  additionalValue?: string;
                  /**
                   * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
                   */
                  additionalInfo?: string;
                  /**
                   * Link to a web page with more information on this eligibility constraint
                   */
                  additionalInfoUri?: string | null;
                  [k: string]: unknown;
                }[];
                [k: string]: unknown;
              }[]
            | null;
          [k: string]: unknown;
        }[]
      | null;
    /**
     * Interest rates available for deposits
     */
    depositRates?:
      | {
          /**
           * The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning
           */
          depositRateType:
            | "BONUS"
            | "BUNDLE_BONUS"
            | "FIXED"
            | "FLOATING"
            | "INTRODUCTORY"
            | "MARKET_LINKED"
            | "VARIABLE";
          /**
           * The rate to be applied
           */
          rate: string;
          /**
           * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
           */
          calculationFrequency?: string | null;
          /**
           * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
           */
          applicationFrequency?: string | null;
          /**
           * Rate tiers applicable for this rate
           */
          tiers?:
            | {
                /**
                 * A display name for the tier
                 */
                name: string;
                /**
                 * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
                 */
                unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
                /**
                 * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
                 */
                minimumValue: number;
                /**
                 * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
                 */
                maximumValue?: number | null;
                /**
                 * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
                 */
                rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
                /**
                 * Defines a condition for the applicability of a tiered rate
                 */
                applicabilityConditions?: {
                  /**
                   * Display text providing more information on the condition
                   */
                  additionalInfo?: string | null;
                  /**
                   * Link to a web page with more information on this condition
                   */
                  additionalInfoUri?: string | null;
                  [k: string]: unknown;
                };
                /**
                 * Display text providing more information on the rate tier.
                 */
                additionalInfo?: string | null;
                /**
                 * Link to a web page with more information on this rate tier
                 */
                additionalInfoUri?: string | null;
                [k: string]: unknown;
              }[]
            | null;
          /**
           * Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)
           */
          additionalValue?: string;
          /**
           * Display text providing more information on the rate
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this rate
           */
          additionalInfoUri?: string | null;
          [k: string]: unknown;
        }[]
      | null;
    /**
     * Interest rates charged against lending balances
     */
    lendingRates?:
      | {
          /**
           * The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning
           */
          lendingRateType:
            | "BUNDLE_DISCOUNT_FIXED"
            | "BUNDLE_DISCOUNT_VARIABLE"
            | "CASH_ADVANCE"
            | "DISCOUNT"
            | "FIXED"
            | "FLOATING"
            | "INTRODUCTORY"
            | "MARKET_LINKED"
            | "PENALTY"
            | "PURCHASE"
            | "VARIABLE";
          /**
           * The rate to be applied
           */
          rate: string;
          /**
           * A comparison rate equivalent for this rate
           */
          comparisonRate?: string | null;
          /**
           * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
           */
          calculationFrequency?: string | null;
          /**
           * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
           */
          applicationFrequency?: string | null;
          /**
           * When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered
           */
          interestPaymentDue?: ("IN_ADVANCE" | "IN_ARREARS") | null;
          /**
           * Options in place for repayments. If absent, the lending rate is applicable to all repayment types
           */
          repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
          /**
           * The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes
           */
          loanPurpose?: ("INVESTMENT" | "OWNER_OCCUPIED") | null;
          /**
           * Rate tiers applicable for this rate
           */
          tiers?:
            | {
                /**
                 * A display name for the tier
                 */
                name: string;
                /**
                 * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
                 */
                unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
                /**
                 * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
                 */
                minimumValue: number;
                /**
                 * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
                 */
                maximumValue?: number | null;
                /**
                 * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
                 */
                rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
                /**
                 * Defines a condition for the applicability of a tiered rate
                 */
                applicabilityConditions?: {
                  /**
                   * Display text providing more information on the condition
                   */
                  additionalInfo?: string | null;
                  /**
                   * Link to a web page with more information on this condition
                   */
                  additionalInfoUri?: string | null;
                  [k: string]: unknown;
                };
                /**
                 * Display text providing more information on the rate tier.
                 */
                additionalInfo?: string | null;
                /**
                 * Link to a web page with more information on this rate tier
                 */
                additionalInfoUri?: string | null;
                [k: string]: unknown;
              }[]
            | null;
          /**
           * Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)
           */
          additionalValue?: string;
          /**
           * Display text providing more information on the rate.
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this rate
           */
          additionalInfoUri?: string | null;
          [k: string]: unknown;
        }[]
      | null;
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta?: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
