/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Optional list of charges applicable to green power
 */
export type EnergyPlanGreenPowerCharges = {
  /**
   * The display name of the charge
   */
  displayName: string;
  /**
   * The description of the charge
   */
  description?: string | null;
  /**
   * The applicable green power scheme
   */
  scheme: "GREENPOWER" | "OTHER";
  /**
   * The type of charge
   */
  type:
    | "FIXED_PER_DAY"
    | "FIXED_PER_WEEK"
    | "FIXED_PER_MONTH"
    | "FIXED_PER_UNIT"
    | "PERCENT_OF_USE"
    | "PERCENT_OF_BILL";
  /**
   * Array of charge tiers based on the percentage of green power used for the period implied by the type.  Array is in order of increasing percentage of green power
   */
  tiers: {
    /**
     * The upper percentage of green power used applicable for this tier
     */
    percentGreen: string;
    /**
     * The rate of the charge if the type implies the application of a rate
     */
    rate?: string | null;
    /**
     * The amount of the charge if the type implies the application of a fixed amount
     */
    amount?: string | null;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}[];
