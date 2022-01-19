/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type EnergyAccountDetail = {
  /**
   * The ID of the account.  To be created in accordance with CDR ID permanence requirements
   */
  accountId: string;
  /**
   * Optional identifier of the account as defined by the data holder.  This must be the value presented on physical statements (if it exists) and must not be used for the value of accountId
   */
  accountNumber?: string | null;
  /**
   * An optional display name for the account if one exists or can be derived.  The content of this field is at the discretion of the data holder
   */
  displayName?: string | null;
  /**
   * The date that the account was created or opened
   */
  creationDate: string;
  [k: string]: unknown;
} & {
  /**
   * The array of plans containing service points and associated plan details
   */
  plans: {
    /**
     * Optional display name for the plan provided by the customer to help differentiate multiple plans
     */
    nickname?: string | null;
    /**
     * An array of servicePointIds, representing NMIs, that this account is linked to
     */
    servicePointIds: string[];
    planOverview: {
      /**
       * The name of the plan if one exists
       */
      displayName?: string | null;
      /**
       * The start date of the applicability of this plan
       */
      startDate: string;
      /**
       * The end date of the applicability of this plan
       */
      endDate?: string | null;
      [k: string]: unknown;
    };
    /**
     * Detail on the plan applicable to this account
     */
    planDetail: {
      /**
       * The fuel types covered by the plan
       */
      fuelType: "ELECTRICITY" | "GAS" | "DUAL";
      /**
       * Flag that indicates that the plan is contingent on the customer taking up an alternate fuel plan from the same retailer (for instance, if the fuelType is ELECTRICITY then a GAS plan from the same retailer must be taken up). Has no meaning if the plan has a fuelType of DUAL. If absent the value is assumed to be false
       */
      isContingentPlan?: boolean;
      /**
       * Charges for metering included in the plan
       */
      meteringCharges?: {
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
      }[];
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
      };
      [k: string]: unknown;
    };
    /**
     * An array of additional contacts that are authorised to act on this account
     */
    authorisedContacts?: {
      /**
       * For people with single names this field need not be present. The single name should be in the lastName field
       */
      firstName?: string;
      /**
       * For people with single names the single name should be in this field
       */
      lastName: string;
      /**
       * Field is mandatory but array may be empty
       */
      middleNames?: string[];
      /**
       * Also known as title or salutation. The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)
       */
      prefix?: string;
      /**
       * Used for a trailing suffix to the name (e.g. Jr)
       */
      suffix?: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
};
