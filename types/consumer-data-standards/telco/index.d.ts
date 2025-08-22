/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface Links {
  /**
   * Fully qualified link that generated the current response document.
   */
  self: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface Meta {
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * A unique identifier for a Telco account, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type TelcoAccountId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountPlanOverview {
  /**
   * The name of the plan if one exists.
   */
  displayName?: string | null;
  /**
   * The end date of the applicability of this plan.
   */
  endDate?: string | null;
  /**
   * The start date of the applicability of this plan.
   */
  startDate: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Object that contains links to additional information on specific topics.
 */
export interface TelcoAdditionalInformation {
  /**
   * A link to detail on bundles that this plan can be a part of.
   */
  bundleUri?: string | null;
  /**
   * A link to detail on eligibility criteria for the plan.
   */
  eligibilityUri?: string | null;
  /**
   * A link to a general overview of the plan.
   */
  overviewUri?: string | null;
  /**
   * A link to detail on pricing for the plan.
   */
  pricingUri?: string | null;
  /**
   * A link to terms and conditions for the plan.
   */
  termsUri?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBillingAccountTransactionAdjustments {
  /**
   * The amount of the adjustment.
   */
  amount: string;
  /**
   * A free text description of the adjustment.
   */
  description: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBillingPaymentTransaction {
  /**
   * The amount paid.
   */
  amount: string;
  /**
   * The method of payment.
   */
  method: "DIRECT_DEBIT" | "CARD" | "TRANSFER" | "BPAY" | "CASH" | "CHEQUE" | "VOUCHER" | "OTHER";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoConcession {
  /**
   * Display text providing more information on the concession.
   */
  additionalInfo?: string | null;
  /**
   * Optional link to additional information regarding the concession.
   */
  additionalInfoUri?: string | null;
  /**
   * Conditional attribute for the amount of discount for the concession - required if _type_ is `FIXED_AMOUNT`.
   */
  amount?: string | null;
  /**
   * Array of ENUM's to specify what the concession applies to. Multiple ENUM values can be provided. If absent, `USAGE` is assumed.
   */
  appliedTo?: ("INVOICE" | "USAGE")[] | null;
  /**
   * Conditional attribute for frequency at which a concession is applied. Required if _type_ is `FIXED_AMOUNT` or `FIXED_PERCENTAGE`. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
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
   * Conditional attribute for the percentage of discount of concession - required if _type_ is `FIXED_PERCENTAGE`.
   */
  percentage?: string | null;
  /**
   * Optional start date for the application of the concession.
   */
  startDate: string;
  /**
   * The concession type.
   */
  type: "CONCESSION" | "REBATE" | "GRANT";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of the contract details. Mandatory if the billing type is `POST_PAID` and a contract agreement is required with the service provider for the plan.
 */
export interface TelcoContract {
  /**
   * URI of the contract conditions.
   */
  contractUri?: string | null;
  /**
   * Description of the contract.
   */
  description?: string | null;
  /**
   * Minimum contract duration in months.
   */
  duration: number;
  /**
   * Name of the contract.
   */
  name: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Optional array of charges that may be part of the invoice (for example services fees) (exclusive of GST).
 */
export interface TelcoInvoiceAccountChargesOtherCharges {
  /**
   * The aggregate total of charges for this item (exclusive of GST).
   */
  amount: string;
  /**
   * A free text description of the charge.
   */
  description: string;
  /**
   * Type of charge.
   */
  type?:
    | (
        | "SERVICE"
        | "EQUIPMENT"
        | "NETWORK"
        | "HANDSET"
        | "DEVICE"
        | "ENTERTAINMENT"
        | "SUBSCRIPTION"
        | "SOFTWARE"
        | "OTHER"
      )
    | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * A discount for on time payment.
 */
export interface TelcoInvoicePayOnTimeDiscount {
  /**
   * The date by which the invoice must be paid to receive the pay on time discount.
   */
  date: string;
  /**
   * The amount that will be discounted if the invoice is paid by the date specified.
   */
  discountAmount: string;
  /**
   * The GST amount that will be discounted if the invoice is paid by the date specified. If absent then zero is assumed.
   */
  gstAmount?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Object containing the start and end date for the period covered by the invoice. Mandatory if any usage based charges are included in the invoice.
 */
export interface TelcoInvoicePeriod {
  /**
   * The end date of the period covered by this invoice.
   */
  endDate: string;
  /**
   * The start date of the period covered by this invoice.
   */
  startDate: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Represents a regular credit card payment schedule. Mandatory if _paymentScheduleUType_ is set to `cardDebit`.
 */
export interface TelcoPaymentScheduleCardDebit {
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
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Represents a regular payment from a digital wallet. Mandatory if _paymentScheduleUType_ is set to `digitalWallet`.
 */
export interface TelcoPaymentScheduleDigitalWallet {
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
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Represents a regular direct debit from a specified bank account. Mandatory if _paymentScheduleUType_ is set to `directDebit`.
 */
export interface TelcoPaymentScheduleDirectDebit {
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
   * Flag indicating that the account details are tokenised and cannot be shared. `false` if absent.
   */
  isTokenised?: boolean | null;
  /**
   * The frequency that payments will occur. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
   */
  paymentFrequency: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if _paymentScheduleUType_ is set to `manualPayment`.
 */
export interface TelcoPaymentScheduleManualPayment {
  /**
   * The frequency with which a bill will be issued. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
   */
  billFrequency: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Plan type for this feature.<ul><li>`METERED`: A plan is charged by usage for the feature<li>`UNMETERED`: A plan with no limits for a feature<li>`LIMITED`: Where plan limit inclusions apply<li>`UNSUPPORTED`: Feature is not supported.</ul>
 */
export type TelcoPlanType = "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailDiscountFeature {
  /**
   * The description of the discount feature.
   */
  description?: string | null;
  /**
   * The display name of the discount feature.
   */
  displayName: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailFeature {
  /**
   * The type of the feature.
   */
  category?:
    | (
        | "DATA"
        | "VOICE"
        | "MESSAGING"
        | "HANDSET"
        | "DEVICE"
        | "NETWORK"
        | "ENTERTAINMENT"
        | "SUBSCRIPTION"
        | "SOFTWARE"
        | "OTHER"
      )
    | null;
  /**
   * The description of the feature.
   */
  description?: string | null;
  /**
   * The display name of the feature.
   */
  displayName: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailIncentiveFeature {
  /**
   * The description of the incentive feature.
   */
  description?: string | null;
  /**
   * The display name of the incentive feature.
   */
  displayName: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailMeteringCharges {
  /**
   * Description of the charge.
   */
  description?: string | null;
  /**
   * Display name of the charge.
   */
  displayName: string;
  /**
   * The upper limit of the charge if the charge could occur in a range.
   */
  maximumValue?: string | null;
  /**
   * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified.
   */
  minimumValue: string;
  /**
   * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
   */
  period?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailPlanFeature {
  /**
   * The description of the feature.
   */
  description?: string | null;
  /**
   * The display name of the feature.
   */
  displayName: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * A data holder-specific unique identifier for a Telco product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
 */
export type TelcoProductId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductPricing {
  /**
   * The amount charged for the duration period.
   */
  amount: string;
  /**
   * The description of the pricing.
   */
  description: string;
  /**
   * The display name of the pricing.
   */
  name: string;
  /**
   * The duration that occurs on a pricing schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
   */
  period?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Balance of data roaming charges. Required unless _planType_ is `UNSUPPORTED`.
 */
export interface TelcoServiceBalanceDataRoaming {
  /**
   * Amount value of data roaming charges. Required unless _planType_ is `UNSUPPORTED`.
   */
  amount?: string | null;
  /**
   * An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.
   */
  description?: string | null;
  /**
   * Amount of data used overseas in megabytes (MB). Required unless _planType_ is `UNSUPPORTED`.
   */
  download?: number | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of MMS Balance. Required if the service plan supports MMS messaging.
 */
export interface TelcoServiceBalanceMessagingMms {
  /**
   * Amount value of MMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  amount?: string | null;
  /**
   * An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.
   */
  description?: string | null;
  /**
   * Number of international MMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  international?: number | null;
  /**
   * Number of national MMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  national?: number | null;
  /**
   * Number of roaming MMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  roaming?: number | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of SMS Balance. Required if the service plan supports SMS messaging.
 */
export interface TelcoServiceBalanceMessagingSms {
  /**
   * Amount value of SMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  amount?: string | null;
  /**
   * An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.
   */
  description?: string | null;
  /**
   * Number of international SMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  international?: number | null;
  /**
   * Number of national SMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  national?: number | null;
  /**
   * Number of roaming SMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  roaming?: number | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * International voice calls.
 */
export interface TelcoServiceBalanceVoiceInternational {
  /**
   * Amount value of international calls available. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  amount?: string | null;
  /**
   * An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.
   */
  description?: string | null;
  /**
   * Total duration (hours, minutes, and seconds) of international voice calls available. Not limited to 24hrs. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  duration?: string | null;
  /**
   * Number of international voice calls available Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  number?: number | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * National voice calls.
 */
export interface TelcoServiceBalanceVoiceNational {
  /**
   * Amount balance of national calls. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  amount?: string | null;
  /**
   * An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.
   */
  description?: string | null;
  /**
   * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  duration?: string | null;
  /**
   * Number of national voice calls. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  number?: number | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Roaming voice calls.
 */
export interface TelcoServiceBalanceVoiceRoaming {
  /**
   * Amount value of roaming calls available. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  amount?: string | null;
  /**
   * An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.
   */
  description?: string | null;
  /**
   * Total duration (hours, minutes, and seconds) of roaming voice calls available. Not limited to 24hrs. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  duration?: string | null;
  /**
   * Number of roaming voice calls available Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
   */
  number?: number | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * A unique identifier for a Telco service, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type TelcoServiceId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Roaming Data Usage.
 */
export interface TelcoUsageDataRoaming {
  /**
   * Amount value of data roaming charges.
   */
  amount?: string | null;
  /**
   * Amount of data used while roaming in megabytes (MB).
   */
  download?: number | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of MMS usage.
 */
export interface TelcoUsageMessagingMms {
  /**
   * Cost amount of MMS messages.
   */
  amount: string;
  /**
   * Number of international MMS messages sent.
   */
  international?: number | null;
  /**
   * Number of national MMS messages sent.
   */
  national: number;
  /**
   * Number of roaming SMS messages sent. Including premium SMS services.
   */
  roaming?: number | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of SMS usage.
 */
export interface TelcoUsageMessagingSms {
  /**
   * Cost amount of SMS messages. Including premium SMS services.
   */
  amount: string;
  /**
   * Number of international SMS messages sent. Including premium SMS services.
   */
  international?: number | null;
  /**
   * Number of national SMS messages sent. Including premium SMS services.
   */
  national: number;
  /**
   * Number of roaming SMS messages sent. Including premium SMS services.
   */
  roaming?: number | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * International voice calls. Required if international calling is supported.
 */
export interface TelcoUsageVoiceInternational {
  /**
   * Cost amount of international voice calls.
   */
  amount: string;
  /**
   * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs.
   */
  duration: string;
  /**
   * Number of international voice calls.
   */
  number: number;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * National voice calls.
 */
export interface TelcoUsageVoiceNational {
  /**
   * Cost amount of national calls.
   */
  amount: string;
  /**
   * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs.
   */
  duration: string;
  /**
   * Number of national voice calls.
   */
  number: number;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Roaming voice calls, Required if roaming is supported.
 */
export interface TelcoUsageVoiceRoaming {
  /**
   * Cost amount of roaming voice calls.
   */
  amount: string;
  /**
   * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs.
   */
  duration: string;
  /**
   * Number of roaming voice calls.
   */
  number: number;
  [k: string]: unknown;
}
