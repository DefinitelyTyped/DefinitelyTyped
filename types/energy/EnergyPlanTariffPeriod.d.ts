/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Array of tariff periods
 */
export type EnergyPlanTariffPeriod = {
  /**
   * Type of charge. Assumed to be other if absent
   */
  type?: ("ENVIRONMENTAL" | "REGULATED" | "NETWORK" | "METERING" | "RETAIL_SERVICE" | "RCTI" | "OTHER") | null;
  /**
   * The name of the tariff period
   */
  displayName: string;
  /**
   * The start date of the tariff period in a calendar year.  Formatted in mm-dd format
   */
  startDate: string;
  /**
   * The end date of the tariff period in a calendar year.  Formatted in mm-dd format
   */
  endDate: string;
  /**
   * The amount of access charge for the tariff period, in dollars per day exclusive of GST.
   */
  dailySupplyCharges?: string | null;
  /**
   * Specifies the type of rate applicable to this tariff period
   */
  rateBlockUType: "singleRate" | "timeOfUseRates" | "demandCharges";
  /**
   * Object representing a single rate.  Required if rateBlockUType is singleRate
   */
  singleRate?: {
    /**
     * Display name of the rate
     */
    displayName: string;
    /**
     * Description of the rate
     */
    description?: string | null;
    /**
     * The block rate (unit price) for any usage above the included fixed usage, in dollars per kWh inclusive of GST.  Only required if pricingModel field is ‘QUOTA’
     */
    generalUnitPrice?: string | null;
    /**
     * Array of controlled load rates in order of usage volume
     */
    rates: {
      /**
       * Unit price of usage per measure unit (exclusive of GST)
       */
      unitPrice: string;
      /**
       * The measurement unit of rate. Assumed to be KWH if absent
       */
      measureUnit?: "KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH";
      /**
       * Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period
       */
      volume?: number;
      [k: string]: unknown;
    }[];
    /**
     * Usage period for which the block rate applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    period?: string | null;
    [k: string]: unknown;
  } | null;
  /**
   * Array of objects representing time of use rates.  Required if rateBlockUType is timeOfUseRates
   */
  timeOfUseRates?:
    | {
        /**
         * Display name of the rate
         */
        displayName: string;
        /**
         * Description of the rate
         */
        description?: string | null;
        /**
         * Array of controlled load rates in order of usage volume
         */
        rates: {
          /**
           * Unit price of usage per  measure unit (exclusive of GST)
           */
          unitPrice: string;
          /**
           * The measurement unit of rate. Assumed to be KWH if absent
           */
          measureUnit?: "KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH";
          /**
           * Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period
           */
          volume?: number;
          [k: string]: unknown;
        }[];
        /**
         * Array of times of use
         */
        timeOfUse: {
          /**
           * The days that the rate applies to
           */
          days: (
            | "SUNDAY"
            | "MONDAY"
            | "TUESDAY"
            | "WEDNESDAY"
            | "THURSDAY"
            | "FRIDAY"
            | "SATURDAY"
            | "BUSINESS_DAYS"
          )[];
          /**
           * Start of the period in HHMM format using 24 hour clock format
           */
          startTime: string;
          /**
           * End of the period in HHMM format using 24 hour clock format
           */
          endTime: string;
          [k: string]: unknown;
        }[];
        /**
         * The type of usage that the rate applies to
         */
        type: "PEAK" | "OFF_PEAK" | "SHOULDER" | "SHOULDER1" | "SHOULDER2";
        [k: string]: unknown;
      }[]
    | null;
  /**
   * Array of demand charges.  Required if rateBlockUType is demandCharges
   */
  demandCharges?:
    | {
        /**
         * Display name of the charge
         */
        displayName: string;
        /**
         * Description of the charge
         */
        description?: string | null;
        /**
         * The charge amount per  measure unit exclusive of GST
         */
        amount: string;
        /**
         * The measurement unit of charge amount. Assumed to be KWH if absent
         */
        measureUnit?: ("KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH") | null;
        /**
         * Start of the period in HHMM format using 24 hour clock format
         */
        startTime: string;
        /**
         * End of the period in HHMM format using 24 hour clock format
         */
        endTime: string;
        /**
         * Object containing demand tariff by day of week
         */
        days?: {
          /**
           * Indicates the demand tariff is applicable on weekdays
           */
          weekdays: boolean;
          /**
           * Indicates the demand tariff is applicable on Saturdays
           */
          saturday: boolean;
          /**
           * Indicates the demand tariff is applicable on Sundays
           */
          sunday: boolean;
          [k: string]: unknown;
        } | null;
        /**
         * Minimum demand for this demand tariff in kW.  If absent then 0 is assumed
         */
        minDemand?: string | null;
        /**
         * Maximum demand for this demand tariff in kW.  If present, must be higher than the value of the minDemand field
         */
        maxDemand?: string | null;
        /**
         * Application period for the demand tariff
         */
        measurementPeriod: "DAY" | "MONTH" | "TARIFF_PERIOD";
        /**
         * Charge period for the demand tariff
         */
        chargePeriod: "DAY" | "MONTH" | "TARIFF_PERIOD";
        [k: string]: unknown;
      }[]
    | null;
  [k: string]: unknown;
}[];
