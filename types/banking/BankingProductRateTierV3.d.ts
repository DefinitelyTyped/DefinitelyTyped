/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Defines the criteria and conditions for which a rate applies
 */
export interface BankingProductRateTierV3 {
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
}
