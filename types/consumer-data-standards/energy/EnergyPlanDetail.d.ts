/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type EnergyPlanDetail = {
  /**
   * The ID of the specific plan
   */
  planId: string;
  /**
   * The date and time from which this plan is effective (ie. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate
   */
  effectiveFrom?: string | null;
  /**
   * The date and time at which this plan will be retired and will no longer be offered. Used to enable the managed deprecation of plans
   */
  effectiveTo?: string | null;
  /**
   * The last date and time that the information for this plan was changed (or the creation date for the plan if it has never been altered)
   */
  lastUpdated: string;
  /**
   * The display name of the plan
   */
  displayName?: string | null;
  /**
   * A description of the plan
   */
  description?: string | null;
  /**
   * The type of the plan
   */
  type: "STANDING" | "MARKET" | "REGULATED";
  /**
   * The fuel types covered by the plan
   */
  fuelType: "ELECTRICITY" | "GAS" | "DUAL";
  /**
   * The ID of the brand under which this plan is offered
   */
  brand: string;
  /**
   * The display name of the brand under which this plan is offered
   */
  brandName: string;
  /**
   * A link to an application web page where this plan can be applied for
   */
  applicationUri?: string | null;
  /**
   * Object that contains links to additional information on specific topics
   */
  additionalInformation?: {
    /**
     * A link to a general overview of the plan
     */
    overviewUri?: string;
    /**
     * A link to terms and conditions for the plan
     */
    termsUri?: string | null;
    /**
     * A link to detail on eligibility criteria for the plan
     */
    eligibilityUri?: string | null;
    /**
     * A link to detail on pricing for the plan
     */
    pricingUri?: string | null;
    /**
     * A link to detail on bundles that this plan can be a part of
     */
    bundleUri?: string | null;
    [k: string]: unknown;
  } | null;
  /**
   * The type of customer that the plan is offered to.  If absent then the plan is available to all customers
   */
  customerType?: ("RESIDENTIAL" | "BUSINESS") | null;
  /**
   * Describes the geographical area that the plan is available for.  If absent then it is assumed the plan is not geographically limited
   */
  geography?: {
    /**
     * Array of valid Australian post codes that are specifically excluded from the plan.  Each element is a single four digit postcode (e.g. 3000) or a range of postcodes defined by two four digit postcodes and a hyphen (e.g. 3000-3999)
     */
    excludedPostcodes?: string[] | null;
    /**
     * Array of valid Australian post codes that are included from the plan.  If absent defaults to all non-excluded post codes.  Each element is a single four digit postcode (e.g. 3000) or a range of postcodes defined by two four digit postcodes and a hyphen (e.g. 3000-3999)
     */
    includedPostcodes?: string[] | null;
    [k: string]: unknown;
  } | null;
  [k: string]: unknown;
} & {
  /**
   * Charges for metering included in the plan
   */
  meteringCharges?:
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
         * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified
         */
        minimumValue: string;
        /**
         * The upper limit of the charge if the charge could occur in a range
         */
        maximumValue?: string | null;
        /**
         * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
         */
        period?: string | null;
        [k: string]: unknown;
      }[]
    | null;
  /**
   * The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to GAS or DUAL
   */
  gasContract?: {
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
  } & {
    /**
     * The term for the contract.  If absent assumes no specified term
     */
    termType?: ("1_YEAR" | "2_YEAR" | "3_YEAR" | "4_YEAR" | "5_YEAR" | "ONGOING" | "OTHER") | null;
    /**
     * Description of the benefit period.  Should only be present if termType has the value ONGOING
     */
    benefitPeriod?: string | null;
    /**
     * Free text description of the terms for the contract
     */
    terms?: string | null;
    /**
     * An array of the meter types that this contract is available for
     */
    meterTypes?: string[] | null;
    /**
     * Number of days in the cooling off period for the contract.  Mandatory for plans with type of MARKET
     */
    coolingOffDays?: string | null;
    /**
     * An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    billFrequency: string[];
    [k: string]: unknown;
  };
  /**
   * The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to ELECTRICITY or DUAL
   */
  electricityContract?: {
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
  } & {
    /**
     * The term for the contract.  If absent assumes no specified term
     */
    termType?: ("1_YEAR" | "2_YEAR" | "3_YEAR" | "4_YEAR" | "5_YEAR" | "ONGOING" | "OTHER") | null;
    /**
     * Description of the benefit period.  Should only be present if termType has the value ONGOING
     */
    benefitPeriod?: string | null;
    /**
     * Free text description of the terms for the contract
     */
    terms?: string | null;
    /**
     * An array of the meter types that this contract is available for
     */
    meterTypes?: string[] | null;
    /**
     * Number of days in the cooling off period for the contract.  Mandatory for plans with type of MARKET
     */
    coolingOffDays?: string | null;
    /**
     * An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    billFrequency: string[];
    [k: string]: unknown;
  };
  [k: string]: unknown;
};
