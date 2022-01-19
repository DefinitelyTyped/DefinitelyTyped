/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductLendingRateV2 {
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
}
