/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanContract {
  /**
   * Free text field containing additional information of the fees for this contract
   */
  additionalFeeInformation?: string | null;
  /**
   * The pricing model for the contract.  Contracts for gas must use SINGLE_RATE.  Note that the detail for the enumeration values are:<ul><li>**SINGLE_RATE** - all energy usage is charged at a single unit rate no matter when it is consumed. Multiple unit rates may exist that correspond to varying volumes of usage i.e. a ‘block’ or ‘step’ tariff (first 50kWh @ X cents, next 50kWh at Y cents etc.</li><li>**SINGLE_RATE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>**TIME_OF_USE** - energy usage is charged at unit rates that vary dependent on time of day and day of week that the energy is consumed</li><li>**TIME_OF_USE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>**FLEXIBLE** - energy usage is charged at unit rates that vary based on external factors</li><li>**FLEXIBLE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>**QUOTA** - all energy usage is charged at a single fixed rate, up to a specified usage quota/allowance. All excess usage beyond the allowance is then charged at a single unit rate (may not be the best way to explain it but it is essentially a ‘subscription’ or telco style product i.e. $50/month for up to 150kWh included usage</li></ul>
   */
  pricingModel:
    | "SINGLE_RATE"
    | "SINGLE_RATE_CONT_LOAD"
    | "TIME_OF_USE"
    | "TIME_OF_USE_CONT_LOAD"
    | "FLEXIBLE"
    | "FLEXIBLE_CONT_LOAD"
    | "QUOTA";
  /**
   * Required if pricingModel is set to TIME_OF_USE.  Defines the time zone to use for calculation of the time of use thresholds
   */
  timeZone?: ("LOCAL" | "AEST") | null;
  /**
   * Flag indicating whether prices are fixed or variable
   */
  isFixed: boolean;
  /**
   * Free text description of price variation policy and conditions for the contract.  Mandatory if isFixed is true
   */
  variation?: string | null;
  /**
   * Free text field that describes what will occur on or prior to expiry of the fixed contract term or benefit period
   */
  onExpiryDescription?: string | null;
  /**
   * Payment options for this contract
   */
  paymentOption: ("PAPER_BILL" | "CREDIT_CARD" | "DIRECT_DEBIT" | "BPAY" | "OTHER")[];
  /**
   * Describes intrinsic green power for the plan.  If present then the plan includes a percentage of green power in the base plan. Should not be present for gas contracts
   */
  intrinsicGreenPower?: {
    /**
     * Percentage of green power intrinsically included in the plan
     */
    greenPercentage: string;
    [k: string]: unknown;
  } | null;
  /**
   * Required if pricing model is SINGLE_RATE_CONT_LOAD or TIME_OF_USE_CONT_LOAD or FLEXIBLE_CONT_LOAD
   */
  controlledLoad?: {
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
  } | null;
  /**
   * Optional list of incentives available for the contract
   */
  incentives?: {
    [k: string]: unknown;
  } | null;
  /**
   * Optional list of discounts available for the contract
   */
  discounts?: {
    [k: string]: unknown;
  } | null;
  /**
   * Optional list of charges applicable to green power
   */
  greenPowerCharges?: {
    [k: string]: unknown;
  } | null;
  /**
   * Eligibility restrictions or requirements
   */
  eligibility?: {
    [k: string]: unknown;
  } | null;
  /**
   * An array of fees applicable to the plan
   */
  fees?: {
    [k: string]: unknown;
  } | null;
  /**
   * Array of feed in tariffs for solar power
   */
  solarFeedInTariff?: {
    [k: string]: unknown;
  } | null;
  /**
   * Array of tariff periods
   */
  tariffPeriod: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
