/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if _addressUType_ is set to `paf`.
 */
export interface CommonPAFAddress {
  /**
   * Building/Property name 1.
   */
  buildingName1?: string | null;
  /**
   * Building/Property name 2.
   */
  buildingName2?: string | null;
  /**
   * Unique identifier for an address as defined by Australia Post. Also known as Delivery Point Identifier.
   */
  dpid?: string | null;
  /**
   * Unit number (including suffix, if applicable).
   */
  flatUnitNumber?: string | null;
  /**
   * Type of flat or unit for the address.
   */
  flatUnitType?: string | null;
  /**
   * Floor or level number (including alpha characters).
   */
  floorLevelNumber?: string | null;
  /**
   * Type of floor or level for the address.
   */
  floorLevelType?: string | null;
  /**
   * Full name of locality.
   */
  localityName: string;
  /**
   * Allotment number for the address.
   */
  lotNumber?: string | null;
  /**
   * Postal delivery number if the address is a postal delivery type.
   */
  postalDeliveryNumber?: number | null;
  /**
   * Postal delivery number prefix related to the postal delivery number.
   */
  postalDeliveryNumberPrefix?: string | null;
  /**
   * Postal delivery number suffix related to the postal delivery number.
   */
  postalDeliveryNumberSuffix?: string | null;
  /**
   * Postal delivery type. (e.g., PO BOX). Valid enumeration defined by Australia Post PAF code file.
   */
  postalDeliveryType?: string | null;
  /**
   * Postcode for the locality.
   */
  postcode: string;
  /**
   * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). `NSW`, `QLD`, `VIC`, `NT`, `WA`, `SA`, `TAS`, `ACT`, `AAT`.
   */
  state: string;
  /**
   * The name of the street.
   */
  streetName?: string | null;
  /**
   * The street type suffix. Valid enumeration defined by Australia Post PAF code file.
   */
  streetSuffix?: string | null;
  /**
   * The street type. Valid enumeration defined by Australia Post PAF code file.
   */
  streetType?: string | null;
  /**
   * Thoroughfare number for a property (first number in a property ranged address).
   */
  thoroughfareNumber1?: number | null;
  /**
   * Suffix for the thoroughfare number. Only relevant if _thoroughfareNumber1_ is populated.
   */
  thoroughfareNumber1Suffix?: string | null;
  /**
   * Second thoroughfare number (only used if the property has a ranged address e.g., 23-25).
   */
  thoroughfareNumber2?: number | null;
  /**
   * Suffix for the second thoroughfare number. Only relevant if _thoroughfareNumber2_ is populated.
   */
  thoroughfareNumber2Suffix?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Required if _addressUType_ is set to `simple`.
 */
export interface CommonSimpleAddress {
  /**
   * First line of the standard address object.
   */
  addressLine1: string;
  /**
   * Second line of the standard address object.
   */
  addressLine2?: string | null;
  /**
   * Third line of the standard address object.
   */
  addressLine3?: string | null;
  /**
   * Name of the city or locality.
   */
  city: string;
  /**
   * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (`AUS`) is assumed if country is not present.
   */
  country?: string | null;
  /**
   * Name of the individual or business formatted for inclusion in an address used for physical mail.
   */
  mailingName?: string | null;
  /**
   * Mandatory for Australian addresses.
   */
  postcode?: string | null;
  /**
   * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. `NSW`, `QLD`, `VIC`, `NT`, `WA`, `SA`, `TAS`, `ACT`, `AAT`.
   */
  state: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * A unique identifier for an Energy account, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type EnergyAccountId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingPaymentTransaction {
  /**
   * The amount paid.
   */
  amount: string;
  /**
   * The method of payment.
   */
  method: "DIRECT_DEBIT" | "CARD" | "TRANSFER" | "BPAY" | "CASH" | "CHEQUE" | "OTHER";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyConcession {
  /**
   * Display text providing more information on the concession. Mandatory if _type_ is `VARIABLE`.
   */
  additionalInfo?: string | null;
  /**
   * Optional link to additional information regarding the concession.
   */
  additionalInfoUri?: string | null;
  /**
   * Conditional attribute for the amount of discount for the concession- required if type is `FIXED_AMOUNT`.
   */
  amount?: string | null;
  /**
   * Array of ENUMs to specify what the concession applies to. Multiple ENUM values can be provided. If absent, `USAGE` is assumed.
   */
  appliedTo?: ("INVOICE" | "USAGE" | "SERVICE_CHARGE" | "CONTROLLED_LOAD")[] | null;
  /**
   * Conditional attribute for frequency at which a concession is applied. Required if type is `FIXED_AMOUNT` or `FIXED_PERCENTAGE`. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
   */
  discountFrequency?: string | null;
  /**
   * The display name of the concession.
   */
  displayName: string;
  /**
   * Optional end date for the application of the concession.
   */
  endDate?: string | null;
  /**
   * Conditional attribute for the percentage of discount of concession - required if type is `FIXED_PERCENTAGE`.
   */
  percentage?: string | null;
  /**
   * Optional start date for the application of the concession.
   */
  startDate?: string | null;
  /**
   * Indicator of the method of concession calculation.
   */
  type: "FIXED_AMOUNT" | "FIXED_PERCENTAGE" | "VARIABLE";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type EnergyDaysEnum = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "PUBLIC_HOLIDAYS";
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Object contains account level charges and credits related to electricity usage.
 */
export interface EnergyInvoiceAccountCharges {
  /**
   * The aggregate total of account level charges for the period covered by the invoice.
   */
  totalCharges: string;
  /**
   * The aggregate total of account level discounts or credits for the period covered by the invoice.
   */
  totalDiscounts: string;
  /**
   * The total GST for all account level charges. If absent then zero is assumed.
   */
  totalGst?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyInvoiceElectricityUsageCharges {
  /**
   * Optional array of charges that may be part of the invoice (for e.g., environmental charges for C&I consumers) (exclusive of GST).
   */
  otherCharges?:
    | {
        /**
         * The aggregate total of charges for this item (exclusive of GST).
         */
        amount: string;
        /**
         * A free text description of the type of charge.
         */
        description: string;
        /**
         * Type of charge. Assumed to be `OTHER` if absent.
         */
        type?: "ENVIRONMENTAL" | "REGULATED" | "NETWORK" | "METERING" | "RETAIL_SERVICE" | "RCTI" | "OTHER";
        [k: string]: unknown;
      }[]
    | null;
  /**
   * The aggregate total of generation credits for the period covered by the invoice (exclusive of GST).
   */
  totalGenerationCredits: string;
  /**
   * The total GST for all electricity usage charges. If absent then zero is assumed.
   */
  totalGst?: string | null;
  /**
   * The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice (exclusive of GST).
   */
  totalOnceOffCharges: string;
  /**
   * The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice (exclusive of GST).
   */
  totalOnceOffDiscounts: string;
  /**
   * The aggregate total of usage charges for the period covered by the invoice (exclusive of GST).
   */
  totalUsageCharges: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyInvoiceGasUsageCharges {
  /**
   * Optional array of charges that may be part of the invoice (for e.g., environmental charges for C&I consumers) (exclusive of GST).
   */
  otherCharges?:
    | {
        /**
         * The aggregate total of charges for this item (exclusive of GST).
         */
        amount: string;
        /**
         * A free text description of the type of charge.
         */
        description: string;
        /**
         * Type of charge. Assumed to be `OTHER` if absent.
         */
        type?: "ENVIRONMENTAL" | "REGULATED" | "NETWORK" | "METERING" | "RETAIL_SERVICE" | "RCTI" | "OTHER";
        [k: string]: unknown;
      }[]
    | null;
  /**
   * The aggregate total of generation credits for the period covered by the invoice (exclusive of GST).
   */
  totalGenerationCredits: string;
  /**
   * The total GST for all gas usage charges. If absent then zero is assumed.
   */
  totalGst?: string | null;
  /**
   * The aggregate total of any once off charges arising from gas usage for the period covered by the invoice (exclusive of GST).
   */
  totalOnceOffCharges: string;
  /**
   * The aggregate total of any once off discounts or credits arising from gas usage for the period covered by the invoice (exclusive of GST).
   */
  totalOnceOffDiscounts: string;
  /**
   * The aggregate total of usage charges for the period covered by the invoice (exclusive of GST).
   */
  totalUsageCharges: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPaymentSchedule {
  /**
   * Optional payment amount indicating that a constant payment amount is scheduled to be paid (used in bill smoothing scenarios).
   */
  amount?: string | null;
  /**
   * Represents a regular credit card payment schedule. Mandatory if _paymentScheduleUType_ is set to `cardDebit`.
   */
  cardDebit?: {
    /**
     * The mechanism by which the payment amount is calculated. Explanation of values are as follows:<br/><ul><li>`STATIC`: Indicates a consistent, static amount, per payment</li><li>`BALANCE`: Indicates that the outstanding balance for the account is paid per period</li><li>`CALCULATED`: Indicates that the payment amount is variable and calculated using a pre-defined algorithm.</li></ul>
     */
    calculationType: "STATIC" | "BALANCE" | "CALCULATED";
    /**
     * The type of credit card held on file.
     */
    cardScheme: "VISA" | "MASTERCARD" | "AMEX" | "DINERS" | "OTHER" | "UNKNOWN";
    /**
     * The frequency that payments will occur. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    paymentFrequency: string;
    [k: string]: unknown;
  } | null;
  /**
   * Represents a regular payment from a digital wallet. Mandatory if _paymentScheduleUType_ is set to `digitalWallet`.
   */
  digitalWallet?: {
    /**
     * The mechanism by which the payment amount is calculated. Explanation of values are as follows:<br/><ul><li>`STATIC`: Indicates a consistent, static amount, per payment</li><li>`BALANCE`: Indicates that the outstanding balance for the account is paid per period</li><li>`CALCULATED`: Indicates that the payment amount is variable and calculated using a pre-defined algorithm.</li></ul>
     */
    calculationType: "STATIC" | "BALANCE" | "CALCULATED";
    /**
     * The identifier of the digital wallet (dependent on type).
     */
    identifier: string;
    /**
     * The display name of the wallet as given by the customer, else a default value defined by the data holder.
     */
    name: string;
    /**
     * The frequency that payments will occur. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    paymentFrequency: string;
    /**
     * The provider of the digital wallet.
     */
    provider: "PAYPAL_AU" | "OTHER";
    /**
     * The type of the digital wallet identifier.
     */
    type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
    [k: string]: unknown;
  } | null;
  /**
   * Represents a regular direct debit from a specified bank account. Mandatory if _paymentScheduleUType_ is set to `directDebit`.
   */
  directDebit?: {
    /**
     * The unmasked account number for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces. Is required if _isTokenised_ is absent or `false`.
     */
    accountNumber?: string | null;
    /**
     * The unmasked BSB for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces. Is required if _isTokenised_ is absent or `false`.
     */
    bsb?: string | null;
    /**
     * The mechanism by which the payment amount is calculated. Explanation of values are as follows:<br/><ul><li>`STATIC`: Indicates a consistent, static amount, per payment</li><li>`BALANCE`: Indicates that the outstanding balance for the account is paid per period</li><li>`CALCULATED`: Indicates that the payment amount is variable and calculated using a pre-defined algorithm.</li></ul>
     */
    calculationType: "STATIC" | "BALANCE" | "CALCULATED";
    /**
     * Flag indicating that the account details are tokenised, or held in a closed system, and is not accessible through any other channels. `false` if absent.
     */
    isTokenised?: boolean | null;
    /**
     * The frequency that payments will occur. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    paymentFrequency: string;
    [k: string]: unknown;
  } | null;
  /**
   * Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if _paymentScheduleUType_ is set to `manualPayment`.
   */
  manualPayment?: {
    /**
     * The frequency with which a bill will be issued. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    billFrequency: string;
    [k: string]: unknown;
  } | null;
  /**
   * The type of object present in this response.
   */
  paymentScheduleUType: "cardDebit" | "directDebit" | "manualPayment" | "digitalWallet";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanDiscounts {
  /**
   * The type of the discount. Mandatory if the discount _type_ is `CONDITIONAL`.
   */
  category?: ("PAY_ON_TIME" | "DIRECT_DEBIT" | "GUARANTEED_DISCOUNT" | "OTHER") | null;
  /**
   * The description of the discount.
   */
  description?: string | null;
  /**
   * The display name of the discount.
   */
  displayName: string;
  /**
   * Optional end date for the discount after which the discount is no longer available.
   */
  endDate?: string | null;
  /**
   * Required if _methodUType_ is `fixedAmount`.
   */
  fixedAmount?: {
    /**
     * The amount of the discount.
     */
    amount: string;
    [k: string]: unknown;
  } | null;
  /**
   * The method of calculation of the discount.
   */
  methodUType: "percentOfBill" | "percentOfUse" | "fixedAmount" | "percentOverThreshold";
  /**
   * Required if _methodUType_ is `percentOfBill`.
   */
  percentOfBill?: {
    /**
     * The rate of the discount applied to the bill amount.
     */
    rate: string;
    [k: string]: unknown;
  } | null;
  /**
   * Required if _methodUType_ is `percentOfUse`.
   */
  percentOfUse?: {
    /**
     * The rate of the discount applied to the _usageamount_.
     */
    rate: string;
    [k: string]: unknown;
  } | null;
  /**
   * Required if _methodUType_ is `percentOverThreshold`.
   */
  percentOverThreshold?: {
    /**
     * The rate of the discount over the usage amount.
     */
    rate: string;
    /**
     * The usage amount threshold above which the discount applies.
     */
    usageAmount: string;
    [k: string]: unknown;
  } | null;
  /**
   * The type of the discount.
   */
  type: "CONDITIONAL" | "GUARANTEED" | "OTHER";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanEligibility {
  /**
   * A description of the eligibility restriction.
   */
  description?: string | null;
  /**
   * Information of the eligibility restriction specific to the type of the restriction.
   */
  information: string;
  /**
   * The type of the eligibility restriction.<br/>The `CONTINGENT_PLAN` value indicates that the plan is contingent on the customer taking up an alternate fuel plan from the same retailer (for instance, if the _fuelType_ is `ELECTRICITY` then a `GAS` plan from the same retailer must be taken up).
   */
  type:
    | "EXISTING_CUST"
    | "EXISTING_POOL"
    | "EXISTING_SOLAR"
    | "EXISTING_BATTERY"
    | "EXISTING_SMART_METER"
    | "EXISTING_BASIC_METER"
    | "SENIOR_CARD"
    | "SMALL_BUSINESS"
    | "NO_SOLAR_FIT"
    | "NEW_CUSTOMER"
    | "ONLINE_ONLY"
    | "REQ_EQUIP_SUPPLIER"
    | "THIRD_PARTY_ONLY"
    | "SPORT_CLUB_MEMBER"
    | "ORG_MEMBER"
    | "SPECIFIC_LOCATION"
    | "MINIMUM_USAGE"
    | "LOYALTY_MEMBER"
    | "GROUP_BUY_MEMBER"
    | "CONTINGENT_PLAN"
    | "OTHER";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanFees {
  /**
   * The fee amount. Required if _term_ is not `PERCENT_OF_BILL`.
   */
  amount?: string | null;
  /**
   * A description of the fee.
   */
  description?: string | null;
  /**
   * The fee rate. Required if _term_ is `PERCENT_OF_BILL`.
   */
  rate?: string | null;
  /**
   * The term of the fee.
   */
  term:
    | "FIXED"
    | "1_YEAR"
    | "2_YEAR"
    | "3_YEAR"
    | "4_YEAR"
    | "5_YEAR"
    | "PERCENT_OF_BILL"
    | "ANNUAL"
    | "DAILY"
    | "WEEKLY"
    | "MONTHLY"
    | "BIANNUAL"
    | "VARIABLE";
  /**
   * The type of the fee.
   */
  type:
    | "EXIT"
    | "ESTABLISHMENT"
    | "LATE_PAYMENT"
    | "DISCONNECTION"
    | "DISCONNECT_MOVE_OUT"
    | "DISCONNECT_NON_PAY"
    | "RECONNECTION"
    | "CONNECTION"
    | "PAYMENT_PROCESSING"
    | "CC_PROCESSING"
    | "CHEQUE_DISHONOUR"
    | "DD_DISHONOUR"
    | "MEMBERSHIP"
    | "CONTRIBUTION"
    | "PAPER_BILL"
    | "OTHER";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanGreenPowerCharges {
  /**
   * The description of the charge.
   */
  description?: string | null;
  /**
   * The display name of the charge.
   */
  displayName: string;
  /**
   * The applicable green power scheme.
   */
  scheme: "GREENPOWER" | "OTHER";
  /**
   * Array of charge tiers based on the percentage of green power used for the period implied by the type. Array is in order of increasing percentage of green power.
   */
  tiers: {
    /**
     * The amount of the charge if the type implies the application of a fixed amount.
     */
    amount?: string;
    /**
     * The upper percentage of green power used applicable for this tier.
     */
    percentGreen: string;
    /**
     * The rate of the charge if the type implies the application of a rate.
     */
    rate?: string;
    [k: string]: unknown;
  }[];
  /**
   * The type of charge.
   */
  type:
    | "FIXED_PER_DAY"
    | "FIXED_PER_WEEK"
    | "FIXED_PER_MONTH"
    | "FIXED_PER_UNIT"
    | "PERCENT_OF_USE"
    | "PERCENT_OF_BILL";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * The unique identifier for the Energy plan.
 */
export type EnergyPlanId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanIncentives {
  /**
   * The type of the incentive.
   */
  category: "GIFT" | "ACCOUNT_CREDIT" | "OTHER";
  /**
   * The description of the incentive.
   */
  description: string;
  /**
   * The display name of the incentive.
   */
  displayName: string;
  /**
   * A display message outlining an eligibility criteria that may apply.
   */
  eligibility?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * A unique identifier for an Energy service point, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type EnergyServicePointId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface ErrorV2 {
  /**
   * The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the _meta_ object. Otherwise, the value is the error code URN.
   */
  code: string;
  /**
   * A human-readable explanation specific to this occurrence of the problem.
   */
  detail: string;
  /**
   * Additional data for customised error codes.
   */
  meta?: {
    /**
     * The CDR error code URN which the application-specific error code extends. Mandatory if the error _code_ is an application-specific error rather than a standardised error code.
     */
    urn?: string | null;
    [k: string]: unknown;
  } | null;
  /**
   * A short, human-readable summary of the problem that **MUST NOT** change from occurrence to occurrence of the problem represented by the error code.
   */
  title: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface Links {
  /**
   * Fully qualified link that generated the current response document.
   */
  self: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface LinksPaginated {
  /**
   * URI to the first page of this set. Mandatory if this response is not the first page.
   */
  first?: string | null;
  /**
   * URI to the last page of this set. Mandatory if this response is not the last page.
   */
  last?: string | null;
  /**
   * URI to the next page of this set. Mandatory if this response is not the last page.
   */
  next?: string | null;
  /**
   * URI to the previous page of this set. Mandatory if this response is not the first page.
   */
  prev?: string | null;
  /**
   * Fully qualified link that generated the current response document.
   */
  self: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type MeasureUnitEnum = "KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH";
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface Meta {
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface MetaPaginated {
  /**
   * The total number of pages in the full set. See [pagination](#pagination).
   */
  totalPages: number;
  /**
   * The total number of records in the full set. See [pagination](#pagination).
   */
  totalRecords: number;
  [k: string]: unknown;
}
