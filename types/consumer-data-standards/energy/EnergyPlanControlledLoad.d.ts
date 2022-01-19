/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Required if pricing model is SINGLE_RATE_CONT_LOAD or TIME_OF_USE_CONT_LOAD or FLEXIBLE_CONT_LOAD
 */
export interface EnergyPlanControlledLoad {
  /**
   * A display name for the controlled load tier
   */
  displayName: string;
  /**
   * A description of the controlled load tier
   */
  description?: string | null;
  /**
   * The daily supply charge (exclusive of GST) for this controlled load tier
   */
  dailyCharge: string;
  /**
   * The period for which the controlled load rate applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
   */
  period: string;
  /**
   * Array of controlled load rates in order of usage volume
   */
  rates: {
    /**
     * Unit price of usage per kWh (exclusive of GST)
     */
    unitPrice: string;
    /**
     * Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period
     */
    volume?: number | null;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
