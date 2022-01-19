/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Optional list of discounts available for the contract
 */
export type EnergyPlanDiscounts = {
  /**
   * The display name of the discount
   */
  displayName: string;
  /**
   * The description of the discount
   */
  description?: string | null;
  /**
   * The type of the discount
   */
  type: "CONDITIONAL" | "GUARANTEED" | "OTHER";
  /**
   * The type of the discount.  Mandatory if the discount type is CONDITIONAL
   */
  category?: ("PAY_ON_TIME" | "DIRECT_DEBIT" | "GUARANTEED_DISCOUNT" | "OTHER") | null;
  /**
   * Optional end date for the discount after which the discount is no longer available
   */
  endDate?: string | null;
  /**
   * The method of calculation of the discount
   */
  methodUType: "percentOfBill" | "percentOfUse" | "fixedAmount" | "percentOverThreshold";
  /**
   * Required if methodUType is percentOfBill
   */
  percentOfBill?: {
    /**
     * The rate of the discount applied to the bill amount
     */
    rate: string;
    [k: string]: unknown;
  } | null;
  /**
   * Required if methodUType is percentOfUse
   */
  percentOfUse?: {
    /**
     * The rate of the discount applied to the usageamount
     */
    rate: string;
    [k: string]: unknown;
  } | null;
  /**
   * Required if methodUType is fixedAmount
   */
  fixedAmount?: {
    /**
     * The amount of the discount
     */
    amount: string;
    [k: string]: unknown;
  } | null;
  /**
   * Required if methodUType is percentOverThreshold
   */
  percentOverThreshold?: {
    /**
     * The rate of the discount over the usage amount
     */
    rate: string;
    /**
     * The usage amount threshold above which the discount applies
     */
    usageAmount: string;
    [k: string]: unknown;
  } | null;
  [k: string]: unknown;
}[];
