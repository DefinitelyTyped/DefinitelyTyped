/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Array of feed in tariffs for solar power
 */
export type EnergyPlanSolarFeedInTariff = {
  /**
   * The name of the tariff
   */
  displayName: string;
  /**
   * A description of the tariff
   */
  description?: string | null;
  /**
   * The applicable scheme
   */
  scheme: "PREMIUM" | "OTHER";
  /**
   * The type of the payer
   */
  payerType: "GOVERNMENT" | "RETAILER";
  /**
   * The type of the payer
   */
  tariffUType: "singleTariff" | "timeVaryingTariffs";
  /**
   * Represents a constant tariff.  Mandatory if tariffUType is set to singleTariff
   */
  singleTariff?: {
    /**
     * The tariff amount
     */
    amount: string;
    [k: string]: unknown;
  } | null;
  /**
   * Represents a tariff based on time.  Mandatory if tariffUType is set to timeVaryingTariffs
   */
  timeVaryingTariffs?: {
    /**
     * The type of the charging time period. If absent applies to all periods
     */
    type?: ("PEAK" | "OFF_PEAK" | "SHOULDER") | null;
    /**
     * The tariff amount
     */
    amount: string;
    /**
     * Array of time periods for which this tariff is applicable
     */
    timeVariations: {
      days?: {
        /**
         * Indicates whether the tariff is applicable Monday to Friday
         */
        weekdays: boolean;
        /**
         * Indicates whether the tariff is applicable Saturday and Sunday
         */
        weekend: boolean;
        [k: string]: unknown;
      };
      /**
       * The beginning of the time period per day for which the tariff applies.  If absent assumes start of day (ie. midnight)
       */
      startTime?: string;
      /**
       * The end of the time period per day for which the tariff applies.  If absent assumes end of day (ie. one second before midnight)
       */
      endTime?: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  } | null;
  [k: string]: unknown;
}[];
