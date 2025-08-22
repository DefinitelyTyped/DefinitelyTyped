/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A unique identifier for a Banking account, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type BankingAccountId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingAuthorisedEntity {
  /**
   * Australian Business Number for the authorised entity.
   */
  abn?: string | null;
  /**
   * Australian Company Number for the authorised entity.
   */
  acn?: string | null;
  /**
   * Australian Registered Body Number for the authorised entity.
   */
  arbn?: string | null;
  /**
   * Description of the authorised entity derived from previously executed direct debits.
   */
  description?: string | null;
  /**
   * Name of the financial institution through which the direct debit will be executed. Is required unless the payment is made via a credit card scheme.
   */
  financialInstitution?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingBalancePurse {
  /**
   * The balance available for this additional currency purse.
   */
  amount: string;
  /**
   * The currency for the purse.
   */
  currency?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingBillerPayee {
  /**
   * BPAY Biller Code of the Biller.
   */
  billerCode: string;
  /**
   * Name of the Biller.
   */
  billerName: string;
  /**
   * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for [MaskedPANString](#common-field-types). If the contents are otherwise sensitive, then it should be masked using the rules applicable for the [MaskedAccountString](#common-field-types) common type.
   */
  crn?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingCreditCardAccount {
  /**
   * The minimum payment amount due for the next card payment.
   */
  minPaymentAmount: string;
  /**
   * If absent assumes `AUD`.
   */
  paymentCurrency?: string | null;
  /**
   * The amount due for the next card payment.
   */
  paymentDueAmount: string;
  /**
   * Date that the next payment for the card is due.
   */
  paymentDueDate: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDigitalWalletPayee {
  /**
   * The identifier of the digital wallet (dependent on type).
   */
  identifier: string;
  /**
   * The display name of the wallet as given by the customer, else a default value defined by the data holder.
   */
  name: string;
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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayeeAccount {
  /**
   * Name of the account to pay to.
   */
  accountName?: string | null;
  /**
   * Number of the account to pay to.
   */
  accountNumber: string;
  /**
   * BSB of the account to pay to.
   */
  bsb: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayeeCard {
  /**
   * Name of the account to pay to.
   */
  cardNumber: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayeePayId {
  /**
   * The identifier of the PayID (dependent on type).
   */
  identifier: string;
  /**
   * The name assigned to the PayID by the owner of the PayID.
   */
  name?: string | null;
  /**
   * The type of the PayID.
   */
  type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingFeeAmount {
  /**
   * The specific amount charged for the fee each time it is incurred.
   */
  amount: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingFeeDiscountAmount {
  /**
   * The specific amount discounted from the fee each time it is incurred.
   */
  amount: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A minimum or maximum fee discount amount where a specific fixed amount is not known until the fee is incurred.
 */
export interface BankingFeeDiscountRange {
  /**
   * The maximum fee discount that will be applied per occurrence.
   */
  discountMaximum?: string | null;
  /**
   * The minimum fee discount that will be applied per occurrence.
   */
  discountMinimum?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A minimum or maximum fee amount where a specific fixed amount is not known until the fee is incurred.
 */
export interface BankingFeeRange {
  /**
   * The maximum fee that will be charged per occurrence.
   */
  feeMaximum?: string | null;
  /**
   * The minimum fee that will be charged per occurrence.
   */
  feeMinimum?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A unique identifier for a Banking instalment plan, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type BankingInstalmentPlanId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingInstalmentPlanSchedule {
  /**
   * Amount due with this repayment.
   */
  amountDue: string;
  /**
   * Date this repayment is or was due.
   */
  dueDate: string;
  /**
   * Whether the associated _amountDue_ has been paid or is otherwise considered as not outstanding. `false` is assumed if absent.
   */
  isPaid?: boolean | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingInternationalPayee {
  bankDetails: {
    /**
     * Account Targeted for payment.
     */
    accountNumber: string;
    bankAddress?: {
      /**
       * Address of the recipient Bank.
       */
      address: string;
      /**
       * Name of the recipient Bank.
       */
      name: string;
      [k: string]: unknown;
    } | null;
    /**
     * Swift bank code. Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html).
     */
    beneficiaryBankBIC?: string | null;
    /**
     * Number for the Clearing House Interbank Payments System.
     */
    chipNumber?: string | null;
    /**
     * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code.
     */
    country: string;
    /**
     * Number for Fedwire payment (Federal Reserve Wire Network).
     */
    fedWireNumber?: string | null;
    /**
     * The legal entity identifier (LEI) for the beneficiary. Aligns with [ISO 17442](https://www.iso.org/standard/59771.html).
     */
    legalEntityIdentifier?: string | null;
    /**
     * International bank routing number.
     */
    routingNumber?: string | null;
    /**
     * Sort code used for account identification in some jurisdictions.
     */
    sortCode?: string | null;
    [k: string]: unknown;
  };
  beneficiaryDetails: {
    /**
     * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code.
     */
    country: string;
    /**
     * Response message for the payment.
     */
    message?: string | null;
    /**
     * Name of the beneficiary.
     */
    name?: string | null;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A unique identifier for a Banking payee, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type BankingPayeeId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductAdditionalInformationV2AdditionalInformationUris {
  /**
   * The URI describing the additional information.
   */
  additionalInfoUri: string;
  /**
   * Display text providing more information about the document URI.
   */
  description?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductCardArt {
  /**
   * Card scheme available with the account.
   */
  cardScheme: "AMEX" | "EFTPOS" | "MASTERCARD" | "VISA" | "OTHER";
  /**
   * Card type available with the account.
   */
  cardType: "CHARGE" | "CREDIT" | "DEBIT";
  /**
   * URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI according to **[[RFC2397]](#nref-RFC2397)**.
   */
  imageUri: string;
  /**
   * Display label for the specific image.
   */
  title?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * The category to which a product or account belongs. See [here](#product-categories) for more details.
 */
export type BankingProductCategoryV2 =
  | "BUSINESS_LOANS"
  | "BUY_NOW_PAY_LATER"
  | "CRED_AND_CHRG_CARDS"
  | "LEASES"
  | "MARGIN_LOANS"
  | "OVERDRAFTS"
  | "PERS_LOANS"
  | "REGULATED_TRUST_ACCOUNTS"
  | "RESIDENTIAL_MORTGAGES"
  | "TERM_DEPOSITS"
  | "TRADE_FINANCE"
  | "TRANS_AND_SAVINGS_ACCOUNTS"
  | "TRAVEL_CARDS";
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductConstraintV3 {
  /**
   * Display text providing more information on the constraint. Mandatory if the [_constraintType_](#tocSproductconstrainttypedoc) value is `OTHER`.
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on the constraint.
   */
  additionalInfoUri?: string | null;
  /**
   * Generic field containing additional information relevant to the [_constraintType_](#tocSproductconstrainttypedoc) specified. Whether mandatory or not is dependent on the value of [_constraintType_](#tocSproductconstrainttypedoc).
   */
  additionalValue?: string | null;
  /**
   * The type of constraint described. For further details, refer to [Product Constraint Types](#tocSproductconstrainttypedoc).
   */
  constraintType:
    | "MAX_BALANCE"
    | "MAX_LIMIT"
    | "MAX_LVR"
    | "MIN_BALANCE"
    | "MIN_LIMIT"
    | "MIN_LVR"
    | "OPENING_BALANCE"
    | "OTHER";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductDiscountEligibility {
  /**
   * Display text providing more information on this eligibility constraint. Mandatory if the [_discountEligibilityType_](#tocSproductdiscounteligibilitydoc) value is `OTHER`.
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this eligibility constraint.
   */
  additionalInfoUri?: string | null;
  /**
   * Generic field containing additional information relevant to the [_discountEligibilityType_](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [_discountEligibilityType_](#tocSproductdiscounteligibilitydoc).
   */
  additionalValue?: string | null;
  /**
   * The type of the specific eligibility constraint for a discount. For further details, refer to [Product Discount Eligibility Types](#tocSproductdiscounteligibilitydoc).
   */
  discountEligibilityType:
    | "BUSINESS"
    | "EMPLOYMENT_STATUS"
    | "INTRODUCTORY"
    | "MAX_AGE"
    | "MIN_AGE"
    | "MIN_INCOME"
    | "MIN_TURNOVER"
    | "NATURAL_PERSON"
    | "OTHER"
    | "PENSION_RECIPIENT"
    | "RESIDENCY_STATUS"
    | "STAFF"
    | "STUDENT";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductEligibilityV2 {
  /**
   * Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the [_eligibilityType_](#tocSproducteligibilitytypedoc) value is `OTHER`.
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this eligibility criteria.
   */
  additionalInfoUri?: string | null;
  /**
   * Generic field containing additional information relevant to the [_eligibilityType_](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [_eligibilityType_](#tocSproducteligibilitytypedoc).
   */
  additionalValue?: string | null;
  /**
   * The type of eligibility criteria described. For further details, refer to [Product Eligibility Types](#tocSproducteligibilitytypedoc).
   */
  eligibilityType:
    | "BUSINESS"
    | "EMPLOYMENT_STATUS"
    | "MAX_AGE"
    | "MIN_AGE"
    | "MIN_INCOME"
    | "MIN_TURNOVER"
    | "NATURAL_PERSON"
    | "OTHER"
    | "PENSION_RECIPIENT"
    | "RESIDENCY_STATUS"
    | "STAFF"
    | "STUDENT";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductFeatureV4 {
  /**
   * Display text providing more information on the feature. Mandatory if the [_featureType_](#tocSproductfeaturetypedoc) value is `OTHER`.
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this feature.
   */
  additionalInfoUri?: string | null;
  /**
   * Generic field containing additional information relevant to the [_featureType_](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [_featureType_](#tocSproductfeaturetypedoc).
   */
  additionalValue?: string | null;
  /**
   * The type of feature described. For further details, refer to [Product Feature Types](#tocSproductfeaturetypedoc).
   */
  featureType:
    | "ADDITIONAL_CARDS"
    | "BALANCE_TRANSFERS"
    | "BILL_PAYMENT"
    | "BONUS_REWARDS"
    | "CARD_ACCESS"
    | "CASHBACK_OFFER"
    | "COMPLEMENTARY_PRODUCT_DISCOUNTS"
    | "EXTRA_DOWN_PAYMENT"
    | "DIGITAL_BANKING"
    | "DIGITAL_WALLET"
    | "DONATE_INTEREST"
    | "EXTRA_REPAYMENTS"
    | "FRAUD_PROTECTION"
    | "FREE_TXNS"
    | "FREE_TXNS_ALLOWANCE"
    | "FUNDS_AVAILABLE_AFTER"
    | "GUARANTOR"
    | "INSTALMENT_PLAN"
    | "INSURANCE"
    | "INTEREST_FREE"
    | "INTEREST_FREE_TRANSFERS"
    | "LOYALTY_PROGRAM"
    | "NOTIFICATIONS"
    | "NPP_ENABLED"
    | "NPP_PAYID"
    | "OFFSET"
    | "OTHER"
    | "OVERDRAFT"
    | "REDRAW"
    | "RELATIONSHIP_MANAGEMENT"
    | "UNLIMITED_TXNS";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A data holder-specific unique identifier for a Banking product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
 */
export type BankingProductId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Details of instalment features on the account.
 */
export interface BankingProductInstalments {
  /**
   * Maximum combined limit of all instalment plans that may be created on the account. If `null` or not present, an opened account balance _creditLimit_ may be assumed to provide a maximum limit for instalments.
   */
  instalmentsLimit?: string | null;
  /**
   * Maximum number of concurrent active instalment plans that may be created on the account. If `null`, there is no predetermined maximum number.
   */
  maximumConcurrentPlans?: number | null;
  /**
   * Maximum value that can be opened as an instalment plan. If `null` or not present, _instalmentsLimit_ is assumed to be the maximum individual plan value.
   */
  maximumPlanValue?: string | null;
  /**
   * Maximum number of instalment payments a plan can be created with.
   */
  maximumSplit: number;
  /**
   * Minimum value that can be opened as an instalment plan.
   */
  minimumPlanValue?: string | null;
  /**
   * Minimum number of instalment payments a plan can be created with.
   */
  minimumSplit: number;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Defines a condition for the applicability of a rate.
 */
export interface BankingProductRateConditionV2 {
  /**
   * Display text providing more information on the condition. Mandatory if the [_rateApplicabilityType_](#tocSbankingproductrateconditiondoc) value is `OTHER`.
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this condition.
   */
  additionalInfoUri?: string | null;
  /**
   * Generic field containing additional information relevant to the _rateApplicabilityType_ specified. Whether mandatory or not is dependent on the value of [_rateApplicabilityType_](#tocSbankingproductrateconditiondoc).
   */
  additionalValue?: string | null;
  /**
   * Category of applicability condition associated with the rate. For more information refer to [Rate and Tier Applicability Types](#tocSbankingproductrateconditiondoc).
   */
  rateApplicabilityType:
    | "MIN_DEPOSITS"
    | "MIN_DEPOSIT_AMOUNT"
    | "DEPOSIT_BALANCE_INCREASED"
    | "EXISTING_CUST"
    | "NEW_ACCOUNTS"
    | "NEW_CUSTOMER"
    | "NEW_CUSTOMER_TO_GROUP"
    | "ONLINE_ONLY"
    | "OTHER"
    | "MIN_PURCHASES"
    | "MAX_WITHDRAWALS"
    | "MAX_WITHDRAWAL_AMOUNT";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A unique identifier for a Banking scheduled payment, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type BankingScheduledPaymentId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingScheduledPaymentInterval {
  /**
   * Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is `P1D`. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.
   */
  dayInInterval?: string | null;
  /**
   * An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with _nextPaymentDate_.
   */
  interval: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if the _recurrenceUType_ value is `eventBased`.
 */
export interface BankingScheduledPaymentRecurrenceEventBased {
  /**
   * Description of the event and conditions that will result in the payment. Expected to be formatted for display to a customer.
   */
  description: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if the _recurrenceUType_ value is `lastWeekDay`.
 */
export interface BankingScheduledPaymentRecurrenceLastWeekday {
  /**
   * The limit date after which no more payments should be made using this schedule. If both _finalPaymentDate_ and _paymentsRemaining_ are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely.
   */
  finalPaymentDate?: string | null;
  /**
   * The interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with _nextPaymentDate_.
   */
  interval: string;
  /**
   * The weekDay specified. The payment will occur on the last occurrence of this weekday in the interval.
   */
  lastWeekDay: "FRI" | "MON" | "SAT" | "SUN" | "THU" | "TUE" | "WED";
  /**
   * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be `ON`.<ul><li>`AFTER` - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<li>`BEFORE` - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<li>`ON` - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<li>`ONLY` - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored.</ul>
   */
  nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
  /**
   * Indicates the number of payments remaining in the schedule. If both _finalPaymentDate_ and _paymentsRemaining_ are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely.
   */
  paymentsRemaining?: number | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Indicates that the payment is a once off payment on a specific future date. Mandatory if the _recurrenceUType_ value is `onceOff`.
 */
export interface BankingScheduledPaymentRecurrenceOnceOff {
  /**
   * The scheduled date for the once off payment.
   */
  paymentDate: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingTermDepositAccount {
  /**
   * The lodgement date of the original deposit.
   */
  lodgementDate: string;
  /**
   * Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated.
   */
  maturityAmount?: string | null;
  /**
   * If absent assumes `AUD`.
   */
  maturityCurrency?: string | null;
  /**
   * Maturity date for the term deposit.
   */
  maturityDate: string;
  /**
   * Current instructions on action to be taken at maturity. This includes default actions that may be specified in the terms and conditions for the product e.g., roll-over to the same term and frequency of interest payments.
   */
  maturityInstructions: "HOLD_ON_MATURITY" | "PAID_OUT_AT_MATURITY" | "ROLLED_OVER";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A unique identifier for a Banking transaction, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type BankingTransactionId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Mandatory if the _addressUType_ value is `paf`.
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
   * Second thoroughfare number (only used if the property has a ranged address, e.g., 23-25).
   */
  thoroughfareNumber2?: number | null;
  /**
   * Suffix for the second thoroughfare number. Only relevant if _thoroughfareNumber2_ is populated.
   */
  thoroughfareNumber2Suffix?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Mandatory if the _addressUType_ value is `simple`.
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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface Links {
  /**
   * Fully qualified link that generated the current response document.
   */
  self: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface Meta {
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Identifier of the applicable overlay service. The _service_ is used in conjunction with the _serviceVersion_. See [here](#npp-services) for more details.
 */
export type NppPaymentService = "X2P1" | "IFTI" | "BSCT" | "CATSCT";
