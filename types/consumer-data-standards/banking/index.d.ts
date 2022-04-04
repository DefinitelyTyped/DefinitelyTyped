/* tslint:disable: array-type max-line-length no-trailing-whitespace */
export interface BankingAccount {
  /**
   * A unique ID of the account adhering to the standards for ID permanence
   */
  accountId: string;
  /**
   * Date that the account was created (if known)
   */
  creationDate?: string | null;
  /**
   * The display name of the account as defined by the bank. This should not incorporate account numbers or PANs. If it does the values should be masked according to the rules of the MaskedAccountString common type.
   */
  displayName: string;
  /**
   * A customer supplied nick name for the account
   */
  nickname?: string | null;
  /**
   * Open or closed status for the account. If not present then OPEN is assumed
   */
  openStatus?: ("CLOSED" | "OPEN") | null;
  /**
   * Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then 'true' is assumed
   */
  isOwned?: boolean | null;
  /**
   * A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number
   */
  maskedNumber: string;
  /**
   * The category to which a product or account belongs. See [here](#product-categories) for more details
   */
  productCategory:
  | "BUSINESS_LOANS"
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
  /**
   * The unique identifier of the account as defined by the data holder (akin to model number for the account)
   */
  productName: string;
  [k: string]: unknown;
}
export type BankingAccountDetailV2 = {
  /**
   * A unique ID of the account adhering to the standards for ID permanence
   */
  accountId: string;
  /**
   * Date that the account was created (if known)
   */
  creationDate?: string | null;
  /**
   * The display name of the account as defined by the bank. This should not incorporate account numbers or PANs. If it does the values should be masked according to the rules of the MaskedAccountString common type.
   */
  displayName: string;
  /**
   * A customer supplied nick name for the account
   */
  nickname?: string | null;
  /**
   * Open or closed status for the account. If not present then OPEN is assumed
   */
  openStatus?: ("CLOSED" | "OPEN") | null;
  /**
   * Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then 'true' is assumed
   */
  isOwned?: boolean | null;
  /**
   * A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number
   */
  maskedNumber: string;
  /**
   * The category to which a product or account belongs. See [here](#product-categories) for more details
   */
  productCategory:
  | "BUSINESS_LOANS"
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
  /**
   * The unique identifier of the account as defined by the data holder (akin to model number for the account)
   */
  productName: string;
  [k: string]: unknown;
} & {
  /**
   * The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces
   */
  bsb?: string | null;
  /**
   * The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces
   */
  accountNumber?: string | null;
  /**
   * Optional field to indicate if this account is part of a bundle that is providing additional benefit for to the customer
   */
  bundleName?: string | null;
  /**
   * The type of structure to present account specific fields.
   */
  specificAccountUType?: ("creditCard" | "loan" | "termDeposit") | null;
  termDeposit?:
  | {
    /**
     * The lodgement date of the original deposit
     */
    lodgementDate: string;
    /**
     * Maturity date for the term deposit
     */
    maturityDate: string;
    /**
     * Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated
     */
    maturityAmount?: string | null;
    /**
     * If absent assumes AUD
     */
    maturityCurrency?: string | null;
    /**
     * Current instructions on action to be taken at maturity. This includes default actions that may be specified in the terms and conditions for the product e.g. roll-over to the same term and frequency of interest payments
     */
    maturityInstructions: "HOLD_ON_MATURITY" | "PAID_OUT_AT_MATURITY" | "ROLLED_OVER";
    [k: string]: unknown;
  }[]
  | null;
  creditCard?: {
    /**
     * The minimum payment amount due for the next card payment
     */
    minPaymentAmount: string;
    /**
     * The amount due for the next card payment
     */
    paymentDueAmount: string;
    /**
     * If absent assumes AUD
     */
    paymentCurrency?: string;
    /**
     * Date that the next payment for the card is due
     */
    paymentDueDate: string;
    [k: string]: unknown;
  } | null;
  loan?: {
    /**
     * Optional original start date for the loan
     */
    originalStartDate?: string | null;
    /**
     * Optional original loan value
     */
    originalLoanAmount?: string | null;
    /**
     * If absent assumes AUD
     */
    originalLoanCurrency?: string | null;
    /**
     * Date that the loan is due to be repaid in full
     */
    loanEndDate: string;
    /**
     * Next date that an instalment is required
     */
    nextInstalmentDate: string;
    /**
     * Minimum amount of next instalment
     */
    minInstalmentAmount?: string | null;
    /**
     * If absent assumes AUD
     */
    minInstalmentCurrency?: string | null;
    /**
     * Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account
     */
    maxRedraw?: string | null;
    /**
     * If absent assumes AUD
     */
    maxRedrawCurrency?: string | null;
    /**
     * Minimum redraw amount
     */
    minRedraw?: string | null;
    /**
     * If absent assumes AUD
     */
    minRedrawCurrency?: string | null;
    /**
     * Set to true if one or more offset accounts are configured for this loan account
     */
    offsetAccountEnabled?: boolean | null;
    /**
     * The accountIDs of the configured offset accounts attached to this loan. Only offset accounts that can be accessed under the current authorisation should be included. It is expected behaviour that offsetAccountEnabled is set to true but the offsetAccountIds field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation
     */
    offsetAccountIds?: string[] | null;
    /**
     * Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST
     */
    repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
    /**
     * The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    repaymentFrequency: string;
    [k: string]: unknown;
  } | null;
  /**
   * current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call
   */
  depositRate?: string | null;
  /**
   * The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call
   */
  lendingRate?: string | null;
  /**
   * Fully described deposit rates for this account based on the equivalent structure in Product Reference
   */
  depositRates?:
  | {
    /**
     * The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning
     */
    depositRateType:
    | "BONUS"
    | "BUNDLE_BONUS"
    | "FIXED"
    | "FLOATING"
    | "INTRODUCTORY"
    | "MARKET_LINKED"
    | "VARIABLE";
    /**
     * The rate to be applied
     */
    rate: string;
    /**
     * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    calculationFrequency?: string | null;
    /**
     * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    applicationFrequency?: string | null;
    /**
     * Rate tiers applicable for this rate
     */
    tiers?:
    | {
      /**
       * A display name for the tier
       */
      name: string;
      /**
       * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
       */
      unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
      /**
       * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
       */
      minimumValue: number;
      /**
       * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
       */
      maximumValue?: number | null;
      /**
       * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
       */
      rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
      /**
       * Defines a condition for the applicability of a tiered rate
       */
      applicabilityConditions?: {
        /**
         * Display text providing more information on the condition
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this condition
         */
        additionalInfoUri?: string | null;
        [k: string]: unknown;
      };
      /**
       * Display text providing more information on the rate tier.
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this rate tier
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)
     */
    additionalValue?: string;
    /**
     * Display text providing more information on the rate
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate
     */
    additionalInfoUri?: string | null;
    [k: string]: unknown;
  }[]
  | null;
  /**
   * Fully described deposit rates for this account based on the equivalent structure in Product Reference
   */
  lendingRates?:
  | {
    /**
     * The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning
     */
    lendingRateType:
    | "BUNDLE_DISCOUNT_FIXED"
    | "BUNDLE_DISCOUNT_VARIABLE"
    | "CASH_ADVANCE"
    | "DISCOUNT"
    | "FIXED"
    | "FLOATING"
    | "INTRODUCTORY"
    | "MARKET_LINKED"
    | "PENALTY"
    | "PURCHASE"
    | "VARIABLE";
    /**
     * The rate to be applied
     */
    rate: string;
    /**
     * A comparison rate equivalent for this rate
     */
    comparisonRate?: string | null;
    /**
     * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    calculationFrequency?: string | null;
    /**
     * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    applicationFrequency?: string | null;
    /**
     * When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered
     */
    interestPaymentDue?: ("IN_ADVANCE" | "IN_ARREARS") | null;
    /**
     * Options in place for repayments. If absent, the lending rate is applicable to all repayment types
     */
    repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
    /**
     * The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes
     */
    loanPurpose?: ("INVESTMENT" | "OWNER_OCCUPIED") | null;
    /**
     * Rate tiers applicable for this rate
     */
    tiers?:
    | {
      /**
       * A display name for the tier
       */
      name: string;
      /**
       * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
       */
      unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
      /**
       * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
       */
      minimumValue: number;
      /**
       * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
       */
      maximumValue?: number | null;
      /**
       * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
       */
      rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
      /**
       * Defines a condition for the applicability of a tiered rate
       */
      applicabilityConditions?: {
        /**
         * Display text providing more information on the condition
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this condition
         */
        additionalInfoUri?: string | null;
        [k: string]: unknown;
      };
      /**
       * Display text providing more information on the rate tier.
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this rate tier
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)
     */
    additionalValue?: string;
    /**
     * Display text providing more information on the rate.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate
     */
    additionalInfoUri?: string | null;
    [k: string]: unknown;
  }[]
  | null;
  /**
   * Array of features of the account based on the equivalent structure in Product Reference with the following additional field
   */
  features?: ({
    /**
     * The type of feature described
     */
    featureType:
    | "ADDITIONAL_CARDS"
    | "BALANCE_TRANSFERS"
    | "BILL_PAYMENT"
    | "BONUS_REWARDS"
    | "CARD_ACCESS"
    | "CASHBACK_OFFER"
    | "COMPLEMENTARY_PRODUCT_DISCOUNTS"
    | "DIGITAL_BANKING"
    | "DIGITAL_WALLET"
    | "DONATE_INTEREST"
    | "EXTRA_REPAYMENTS"
    | "FRAUD_PROTECTION"
    | "FREE_TXNS"
    | "FREE_TXNS_ALLOWANCE"
    | "GUARANTOR"
    | "INSURANCE"
    | "INSTALMENT_PLAN"
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
    /**
     * Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)
     */
    additionalValue?: string;
    /**
     * Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER
     */
    additionalInfo?: string;
    /**
     * Link to a web page with more information on this feature
     */
    additionalInfoUri?: string | null;
    [k: string]: unknown;
  } & {
    /**
     * True if the feature is already activated and false if the feature is available for activation. Defaults to true if absent. (note this is an additional field appended to the feature object defined in the Product Reference payload)
     */
    isActivated?: boolean | null;
    [k: string]: unknown;
  })[];
  /**
   * Fees and charges applicable to the account based on the equivalent structure in Product Reference
   */
  fees?:
  | {
    /**
     * Name of the fee
     */
    name: string;
    /**
     * The type of fee
     */
    feeType:
    | "DEPOSIT"
    | "EVENT"
    | "EXIT"
    | "PAYMENT"
    | "PERIODIC"
    | "PURCHASE"
    | "TRANSACTION"
    | "UPFRONT"
    | "VARIABLE"
    | "WITHDRAWAL";
    /**
     * The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
     */
    amount?: string;
    /**
     * A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.
     */
    balanceRate?: string;
    /**
     * A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
     */
    transactionRate?: string;
    /**
     * A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
     */
    accruedRate?: string;
    /**
     * The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    accrualFrequency?: string | null;
    /**
     * The currency the fee will be charged in. Assumes AUD if absent
     */
    currency?: string | null;
    /**
     * Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)
     */
    additionalValue?: string;
    /**
     * Display text providing more information on the fee
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this fee
     */
    additionalInfoUri?: string | null;
    /**
     * An optional list of discounts to this fee that may be available
     */
    discounts?:
    | {
      /**
       * Description of the discount
       */
      description: string;
      /**
       * The type of discount. See the next section for an overview of valid values and their meaning
       */
      discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
      /**
       * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
       */
      amount?: string;
      /**
       * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
       */
      balanceRate?: string;
      /**
       * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory
       */
      transactionRate?: string;
      /**
       * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
       */
      accruedRate?: string;
      /**
       * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
       */
      feeRate?: string;
      /**
       * Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the discount
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this discount
       */
      additionalInfoUri?: string | null;
      /**
       * Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.
       */
      eligibility?: {
        /**
         * The type of the specific eligibility constraint for a discount
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
        /**
         * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
         */
        additionalValue?: string;
        /**
         * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
         */
        additionalInfo?: string;
        /**
         * Link to a web page with more information on this eligibility constraint
         */
        additionalInfoUri?: string | null;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }[]
    | null;
    [k: string]: unknown;
  }[]
  | null;
  /**
   * The addresses for the account to be used for correspondence
   */
  addresses?:
  | {
    /**
     * The type of address object present
     */
    addressUType: "paf" | "simple";
    simple?: {
      /**
       * Name of the individual or business formatted for inclusion in an address used for physical mail
       */
      mailingName?: string;
      /**
       * First line of the standard address object
       */
      addressLine1: string;
      /**
       * Second line of the standard address object
       */
      addressLine2?: string;
      /**
       * Third line of the standard address object
       */
      addressLine3?: string;
      /**
       * Mandatory for Australian addresses
       */
      postcode?: string;
      /**
       * Name of the city or locality
       */
      city: string;
      /**
       * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
       */
      state: string;
      /**
       * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
       */
      country?: string;
      [k: string]: unknown;
    };
    /**
     * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
     */
    paf?: {
      /**
       * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
       */
      dpid?: string;
      /**
       * Thoroughfare number for a property (first number in a property ranged address)
       */
      thoroughfareNumber1?: number;
      /**
       * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
       */
      thoroughfareNumber1Suffix?: string;
      /**
       * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
       */
      thoroughfareNumber2?: number;
      /**
       * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
       */
      thoroughfareNumber2Suffix?: string;
      /**
       * Type of flat or unit for the address
       */
      flatUnitType?: string;
      /**
       * Unit number (including suffix, if applicable)
       */
      flatUnitNumber?: string;
      /**
       * Type of floor or level for the address
       */
      floorLevelType?: string;
      /**
       * Floor or level number (including alpha characters)
       */
      floorLevelNumber?: string;
      /**
       * Allotment number for the address
       */
      lotNumber?: string;
      /**
       * Building/Property name 1
       */
      buildingName1?: string;
      /**
       * Building/Property name 2
       */
      buildingName2?: string;
      /**
       * The name of the street
       */
      streetName?: string;
      /**
       * The street type. Valid enumeration defined by Australia Post PAF code file
       */
      streetType?: string;
      /**
       * The street type suffix. Valid enumeration defined by Australia Post PAF code file
       */
      streetSuffix?: string;
      /**
       * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
       */
      postalDeliveryType?: string;
      /**
       * Postal delivery number if the address is a postal delivery type
       */
      postalDeliveryNumber?: number;
      /**
       * Postal delivery number prefix related to the postal delivery number
       */
      postalDeliveryNumberPrefix?: string;
      /**
       * Postal delivery number suffix related to the postal delivery number
       */
      postalDeliveryNumberSuffix?: string;
      /**
       * Full name of locality
       */
      localityName: string;
      /**
       * Postcode for the locality
       */
      postcode: string;
      /**
       * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
       */
      state: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }[]
  | null;
  [k: string]: unknown;
};
export interface BankingAuthorisedEntity {
  /**
   * Description of the authorised entity derived from previously executed direct debits
   */
  description?: string | null;
  /**
   * Name of the financial institution through which the direct debit will be executed. Is required unless the payment is made via a credit card scheme
   */
  financialInstitution?: string | null;
  /**
   * Australian Business Number for the authorised entity
   */
  abn?: string | null;
  /**
   * Australian Company Number for the authorised entity
   */
  acn?: string | null;
  /**
   * Australian Registered Body Number for the authorised entity
   */
  arbn?: string | null;
  [k: string]: unknown;
}
export interface BankingBalance {
  /**
   * A unique ID of the account adhering to the standards for ID permanence
   */
  accountId: string;
  /**
   * The balance of the account at this time. Should align to the balance available via other channels such as Internet Banking. Assumed to be negative if the customer has money owing
   */
  currentBalance: string;
  /**
   * Balance representing the amount of funds available for transfer. Assumed to be zero or positive
   */
  availableBalance: string;
  /**
   * Object representing the maximum amount of credit that is available for this account. Assumed to be zero if absent
   */
  creditLimit?: string | null;
  /**
   * Object representing the available limit amortised according to payment schedule. Assumed to be zero if absent
   */
  amortisedLimit?: string | null;
  /**
   * The currency for the balance amounts. If absent assumed to be AUD
   */
  currency?: string | null;
  /**
   * Optional array of balances for the account in other currencies. Included to support accounts that support multi-currency purses such as Travel Cards
   */
  purses?:
  | {
    /**
     * The balance available for this additional currency purse
     */
    amount: string;
    /**
     * The currency for the purse
     */
    currency?: string | null;
    [k: string]: unknown;
  }[]
  | null;
  [k: string]: unknown;
}
export interface BankingBalancePurse {
  /**
   * The balance available for this additional currency purse
   */
  amount: string;
  /**
   * The currency for the purse
   */
  currency?: string | null;
  [k: string]: unknown;
}
export interface BankingBillerPayee {
  /**
   * BPAY Biller Code of the Biller
   */
  billerCode: string;
  /**
   * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
   */
  crn?: string | null;
  /**
   * Name of the Biller
   */
  billerName: string;
  [k: string]: unknown;
}
export interface BankingCreditCardAccount {
  /**
   * The minimum payment amount due for the next card payment
   */
  minPaymentAmount: string;
  /**
   * The amount due for the next card payment
   */
  paymentDueAmount: string;
  /**
   * If absent assumes AUD
   */
  paymentCurrency?: string;
  /**
   * Date that the next payment for the card is due
   */
  paymentDueDate: string;
  [k: string]: unknown;
}
export interface BankingDigitalWalletPayee {
  /**
   * The name assigned to the digital wallet by the owner of the wallet, else the display name provided by the digital wallet provider
   */
  name: string;
  /**
   * The identifier of the digital wallet (dependent on type)
   */
  identifier: string;
  /**
   * The type of the digital wallet identifier
   */
  type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
  /**
   * The provider of the digital wallet
   */
  provider: "PAYPAL_AU" | "OTHER";
  [k: string]: unknown;
}
export interface BankingDirectDebit {
  /**
   * A unique ID of the account adhering to the standards for ID permanence.
   */
  accountId: string;
  authorisedEntity: {
    /**
     * Description of the authorised entity derived from previously executed direct debits
     */
    description?: string | null;
    /**
     * Name of the financial institution through which the direct debit will be executed. Is required unless the payment is made via a credit card scheme
     */
    financialInstitution?: string | null;
    /**
     * Australian Business Number for the authorised entity
     */
    abn?: string | null;
    /**
     * Australian Company Number for the authorised entity
     */
    acn?: string | null;
    /**
     * Australian Registered Body Number for the authorised entity
     */
    arbn?: string | null;
    [k: string]: unknown;
  };
  /**
   * The date and time of the last debit executed under this authorisation
   */
  lastDebitDateTime?: string;
  /**
   * The amount of the last debit executed under this authorisation
   */
  lastDebitAmount?: string;
  [k: string]: unknown;
}
export interface BankingDomesticPayee {
  /**
   * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
   */
  payeeAccountUType: "account" | "card" | "payId";
  account?: {
    /**
     * Name of the account to pay to
     */
    accountName?: string | null;
    /**
     * BSB of the account to pay to
     */
    bsb: string;
    /**
     * Number of the account to pay to
     */
    accountNumber: string;
    [k: string]: unknown;
  };
  card?: {
    /**
     * Name of the account to pay to
     */
    cardNumber: string;
    [k: string]: unknown;
  };
  payId?: {
    /**
     * The name assigned to the PayID by the owner of the PayID
     */
    name?: string | null;
    /**
     * The identifier of the PayID (dependent on type)
     */
    identifier: string;
    /**
     * The type of the PayID
     */
    type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface BankingDomesticPayeeAccount {
  /**
   * Name of the account to pay to
   */
  accountName?: string | null;
  /**
   * BSB of the account to pay to
   */
  bsb: string;
  /**
   * Number of the account to pay to
   */
  accountNumber: string;
  [k: string]: unknown;
}
export interface BankingDomesticPayeeCard {
  /**
   * Name of the account to pay to
   */
  cardNumber: string;
  [k: string]: unknown;
}
export interface BankingDomesticPayeePayId {
  /**
   * The name assigned to the PayID by the owner of the PayID
   */
  name?: string | null;
  /**
   * The identifier of the PayID (dependent on type)
   */
  identifier: string;
  /**
   * The type of the PayID
   */
  type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
  [k: string]: unknown;
}
export interface BankingInternationalPayee {
  beneficiaryDetails: {
    /**
     * Name of the beneficiary
     */
    name?: string | null;
    /**
     * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
     */
    country: string;
    /**
     * Response message for the payment
     */
    message?: string | null;
    [k: string]: unknown;
  };
  bankDetails: {
    /**
     * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
     */
    country: string;
    /**
     * Account Targeted for payment
     */
    accountNumber: string;
    bankAddress?: {
      /**
       * Name of the recipient Bank
       */
      name: string;
      /**
       * Address of the recipient Bank
       */
      address: string;
      [k: string]: unknown;
    } | null;
    /**
     * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
     */
    beneficiaryBankBIC?: string | null;
    /**
     * Number for Fedwire payment (Federal Reserve Wire Network)
     */
    fedWireNumber?: string | null;
    /**
     * Sort code used for account identification in some jurisdictions
     */
    sortCode?: string | null;
    /**
     * Number for the Clearing House Interbank Payments System
     */
    chipNumber?: string | null;
    /**
     * International bank routing number
     */
    routingNumber?: string | null;
    /**
     * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
     */
    legalEntityIdentifier?: string | null;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface BankingLoanAccountV2 {
  /**
   * Optional original start date for the loan
   */
  originalStartDate?: string | null;
  /**
   * Optional original loan value
   */
  originalLoanAmount?: string | null;
  /**
   * If absent assumes AUD
   */
  originalLoanCurrency?: string | null;
  /**
   * Date that the loan is due to be repaid in full
   */
  loanEndDate: string;
  /**
   * Next date that an instalment is required
   */
  nextInstalmentDate: string;
  /**
   * Minimum amount of next instalment
   */
  minInstalmentAmount?: string | null;
  /**
   * If absent assumes AUD
   */
  minInstalmentCurrency?: string | null;
  /**
   * Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account
   */
  maxRedraw?: string | null;
  /**
   * If absent assumes AUD
   */
  maxRedrawCurrency?: string | null;
  /**
   * Minimum redraw amount
   */
  minRedraw?: string | null;
  /**
   * If absent assumes AUD
   */
  minRedrawCurrency?: string | null;
  /**
   * Set to true if one or more offset accounts are configured for this loan account
   */
  offsetAccountEnabled?: boolean | null;
  /**
   * The accountIDs of the configured offset accounts attached to this loan. Only offset accounts that can be accessed under the current authorisation should be included. It is expected behaviour that offsetAccountEnabled is set to true but the offsetAccountIds field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation
   */
  offsetAccountIds?: string[] | null;
  /**
   * Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST
   */
  repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
  /**
   * The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
   */
  repaymentFrequency: string;
  [k: string]: unknown;
}

export type BankingPayeeDetailV2 = {
  /**
   * ID of the payee adhering to the rules of ID permanence
   */
  payeeId: string;
  /**
   * The short display name of the payee as provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank for the payee consistent with existing digital banking channels
   */
  nickname: string;
  /**
   * A description of the payee provided by the customer
   */
  description?: string;
  /**
   * The type of payee. DOMESTIC means a registered payee for domestic payments including NPP. INTERNATIONAL means a registered payee for international payments. BILLER means a registered payee for BPAY. DIGITAL_WALLET means a registered payee for a bank's digital wallet
   */
  type: ("BILLER" | "DIGITAL_WALLET" | "DOMESTIC" | "INTERNATIONAL") | null;
  /**
   * The date the payee was created by the customer
   */
  creationDate?: string | null;
  [k: string]: unknown;
} & {
  /**
   * Type of object included that describes the payee in detail
   */
  payeeUType: "biller" | "domestic" | "digitalWallet" | "international";
  domestic?: {
    /**
     * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
     */
    payeeAccountUType: "account" | "card" | "payId";
    account?: {
      /**
       * Name of the account to pay to
       */
      accountName?: string | null;
      /**
       * BSB of the account to pay to
       */
      bsb: string;
      /**
       * Number of the account to pay to
       */
      accountNumber: string;
      [k: string]: unknown;
    };
    card?: {
      /**
       * Name of the account to pay to
       */
      cardNumber: string;
      [k: string]: unknown;
    };
    payId?: {
      /**
       * The name assigned to the PayID by the owner of the PayID
       */
      name?: string | null;
      /**
       * The identifier of the PayID (dependent on type)
       */
      identifier: string;
      /**
       * The type of the PayID
       */
      type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  digitalWallet?: {
    /**
     * The name assigned to the digital wallet by the owner of the wallet, else the display name provided by the digital wallet provider
     */
    name: string;
    /**
     * The identifier of the digital wallet (dependent on type)
     */
    identifier: string;
    /**
     * The type of the digital wallet identifier
     */
    type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
    /**
     * The provider of the digital wallet
     */
    provider: "PAYPAL_AU" | "OTHER";
    [k: string]: unknown;
  };
  biller?: {
    /**
     * BPAY Biller Code of the Biller
     */
    billerCode: string;
    /**
     * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
     */
    crn?: string | null;
    /**
     * Name of the Biller
     */
    billerName: string;
    [k: string]: unknown;
  };
  international?: {
    beneficiaryDetails: {
      /**
       * Name of the beneficiary
       */
      name?: string | null;
      /**
       * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
       */
      country: string;
      /**
       * Response message for the payment
       */
      message?: string | null;
      [k: string]: unknown;
    };
    bankDetails: {
      /**
       * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
       */
      country: string;
      /**
       * Account Targeted for payment
       */
      accountNumber: string;
      bankAddress?: {
        /**
         * Name of the recipient Bank
         */
        name: string;
        /**
         * Address of the recipient Bank
         */
        address: string;
        [k: string]: unknown;
      } | null;
      /**
       * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
       */
      beneficiaryBankBIC?: string | null;
      /**
       * Number for Fedwire payment (Federal Reserve Wire Network)
       */
      fedWireNumber?: string | null;
      /**
       * Sort code used for account identification in some jurisdictions
       */
      sortCode?: string | null;
      /**
       * Number for the Clearing House Interbank Payments System
       */
      chipNumber?: string | null;
      /**
       * International bank routing number
       */
      routingNumber?: string | null;
      /**
       * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
       */
      legalEntityIdentifier?: string | null;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
};
export interface BankingPayeeV2 {
  /**
   * ID of the payee adhering to the rules of ID permanence
   */
  payeeId: string;
  /**
   * The short display name of the payee as provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank for the payee consistent with existing digital banking channels
   */
  nickname: string;
  /**
   * A description of the payee provided by the customer
   */
  description?: string;
  /**
   * The type of payee. DOMESTIC means a registered payee for domestic payments including NPP. INTERNATIONAL means a registered payee for international payments. BILLER means a registered payee for BPAY. DIGITAL_WALLET means a registered payee for a bank's digital wallet
   */
  type: ("BILLER" | "DIGITAL_WALLET" | "DOMESTIC" | "INTERNATIONAL") | null;
  /**
   * The date the payee was created by the customer
   */
  creationDate?: string | null;
  [k: string]: unknown;
}
export interface BankingProductAdditionalInformationV2AdditionalInformationUris {
  /**
   * Display text providing more information about the document URI
   */
  description?: string | null;
  /**
   * The URI describing the additional information
   */
  additionalInfoUri: string;
  [k: string]: unknown;
}
/**
 * Object that contains links to additional information on specific topics
 */
export interface BankingProductAdditionalInformationV2 {
  /**
   * General overview of the product. Mandatory if `additionalOverviewUris` includes one or more supporting documents.
   */
  overviewUri?: string;
  /**
   * Terms and conditions for the product. Mandatory if `additionalTermsUris` includes one or more supporting documents.
   */
  termsUri?: string;
  /**
   * Eligibility rules and criteria for the product. Mandatory if `additionalEligibilityUris` includes one or more supporting documents.
   */
  eligibilityUri?: string;
  /**
   * Description of fees, pricing, discounts, exemptions and bonuses for the product. Mandatory if `additionalFeesAndPricingUris` includes one or more supporting documents.
   */
  feesAndPricingUri?: string;
  /**
   * Description of a bundle that this product can be part of. Mandatory if `additionalBundleUris` includes one or more supporting documents.
   */
  bundleUri?: string;
  /**
   * An array of additional general overviews for the product or features of the product, if applicable. To be treated as secondary documents to the `overviewUri`. Only to be used if there is a primary `overviewUri`.
   */
  additionalOverviewUris?: {
    /**
     * Display text providing more information about the document URI
     */
    description?: string | null;
    /**
     * The URI describing the additional information
     */
    additionalInfoUri: string;
    [k: string]: unknown;
  }[];
  /**
   * An array of additional terms and conditions for the product, if applicable. To be treated as secondary documents to the `termsUri`. Only to be used if there is a primary `termsUri`.
   */
  additionalTermsUris?: {
    /**
     * Display text providing more information about the document URI
     */
    description?: string | null;
    /**
     * The URI describing the additional information
     */
    additionalInfoUri: string;
    [k: string]: unknown;
  }[];
  /**
   * An array of additional eligibility rules and criteria for the product, if applicable. To be treated as secondary documents to the `eligibilityUri`. Only to be used if there is a primary `eligibilityUri`.
   */
  additionalEligibilityUris?: {
    /**
     * Display text providing more information about the document URI
     */
    description?: string | null;
    /**
     * The URI describing the additional information
     */
    additionalInfoUri: string;
    [k: string]: unknown;
  }[];
  /**
   * An array of additional fees, pricing, discounts, exemptions and bonuses for the product, if applicable. To be treated as secondary documents to the `feesAndPricingUri`. Only to be used if there is a primary `feesAndPricingUri`.
   */
  additionalFeesAndPricingUris?: {
    /**
     * Display text providing more information about the document URI
     */
    description?: string | null;
    /**
     * The URI describing the additional information
     */
    additionalInfoUri: string;
    [k: string]: unknown;
  }[];
  /**
   * An array of additional bundles for the product, if applicable. To be treated as secondary documents to the `bundleUri`. Only to be used if there is a primary `bundleUri`.
   */
  additionalBundleUris?: {
    /**
     * Display text providing more information about the document URI
     */
    description?: string | null;
    /**
     * The URI describing the additional information
     */
    additionalInfoUri: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
export interface BankingProductBundle {
  /**
   * Name of the bundle
   */
  name: string;
  /**
   * Description of the bundle
   */
  description: string;
  /**
   * Display text providing more information on the bundle
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on the bundle criteria and benefits
   */
  additionalInfoUri?: string | null;
  /**
   * Array of product IDs for products included in the bundle that are available via the product end points.  Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference end points
   */
  productIds?: string[] | null;
  [k: string]: unknown;
}

/**
 * The category to which a product or account belongs. See [here](#product-categories) for more details
 */
export type BankingProductCategory =
  | "BUSINESS_LOANS"
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
export interface BankingProductConstraint {
  /**
   * The type of constraint described.  See the next section for an overview of valid values and their meaning
   */
  constraintType: "MAX_BALANCE" | "MAX_LIMIT" | "MIN_BALANCE" | "MIN_LIMIT" | "OPENING_BALANCE";
  /**
   * Generic field containing additional information relevant to the [constraintType](#tocSproductconstrainttypedoc) specified.  Whether mandatory or not is dependent on the value of [constraintType](#tocSproductconstrainttypedoc)
   */
  additionalValue?: string;
  /**
   * Display text providing more information the constraint
   */
  additionalInfo?: string;
  /**
   * Link to a web page with more information on the constraint
   */
  additionalInfoUri?: string;
  [k: string]: unknown;
}
export interface BankingProductDepositRate {
  /**
   * The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning
   */
  depositRateType: "BONUS" | "BUNDLE_BONUS" | "FIXED" | "FLOATING" | "INTRODUCTORY" | "MARKET_LINKED" | "VARIABLE";
  /**
   * The rate to be applied
   */
  rate: string;
  /**
   * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
   */
  calculationFrequency?: string | null;
  /**
   * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
   */
  applicationFrequency?: string | null;
  /**
   * Rate tiers applicable for this rate
   */
  tiers?:
  | {
    /**
     * A display name for the tier
     */
    name: string;
    /**
     * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
     */
    unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
    /**
     * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
     */
    minimumValue: number;
    /**
     * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
     */
    maximumValue?: number | null;
    /**
     * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
     */
    rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
    /**
     * Defines a condition for the applicability of a tiered rate
     */
    applicabilityConditions?: {
      /**
       * Display text providing more information on the condition
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this condition
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    };
    /**
     * Display text providing more information on the rate tier.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate tier
     */
    additionalInfoUri?: string | null;
    [k: string]: unknown;
  }[]
  | null;
  /**
   * Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)
   */
  additionalValue?: string;
  /**
   * Display text providing more information on the rate
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this rate
   */
  additionalInfoUri?: string | null;
  [k: string]: unknown;
}

export type BankingProductDetailV4 = {
  /**
   * A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
   */
  productId: string;
  /**
   * The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate
   */
  effectiveFrom?: string | null;
  /**
   * The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products
   */
  effectiveTo?: string | null;
  /**
   * The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)
   */
  lastUpdated: string;
  /**
   * The category to which a product or account belongs. See [here](#product-categories) for more details
   */
  productCategory:
  | "BUSINESS_LOANS"
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
  /**
   * The display name of the product
   */
  name: string;
  /**
   * A description of the product
   */
  description: string;
  /**
   * A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required
   */
  brand: string;
  /**
   * An optional display name of the brand
   */
  brandName?: string | null;
  /**
   * A link to an application web page where this product can be applied for.
   */
  applicationUri?: string | null;
  /**
   * Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable
   */
  isTailored: boolean;
  /**
   * Object that contains links to additional information on specific topics
   */
  additionalInformation?: {
    /**
     * General overview of the product
     */
    overviewUri?: string | null;
    /**
     * Terms and conditions for the product
     */
    termsUri?: string | null;
    /**
     * Eligibility rules and criteria for the product
     */
    eligibilityUri?: string | null;
    /**
     * Description of fees, pricing, discounts, exemptions and bonuses for the product
     */
    feesAndPricingUri?: string | null;
    /**
     * Description of a bundle that this product can be part of
     */
    bundleUri?: string | null;
    [k: string]: unknown;
  } | null;
  /**
   * An array of card art images
   */
  cardArt?:
  | {
    /**
     * Display label for the specific image
     */
    title?: string | null;
    /**
     * URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI [RFC 2397](https://tools.ietf.org/html/rfc2397)
     */
    imageUri: string;
    [k: string]: unknown;
  }[]
  | null;
  [k: string]: unknown;
} & {
  /**
   * An array of bundles that this product participates in.  Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle.  It is assumed that the current product is included in the bundle also
   */
  bundles?:
  | {
    /**
     * Name of the bundle
     */
    name: string;
    /**
     * Description of the bundle
     */
    description: string;
    /**
     * Display text providing more information on the bundle
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on the bundle criteria and benefits
     */
    additionalInfoUri?: string | null;
    /**
     * Array of product IDs for products included in the bundle that are available via the product end points.  Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference end points
     */
    productIds?: string[] | null;
    [k: string]: unknown;
  }[]
  | null;
  /**
   * Array of features available for the product
   */
  features?:
  | {
    /**
     * The type of feature described
     */
    featureType:
    | "ADDITIONAL_CARDS"
    | "BALANCE_TRANSFERS"
    | "BILL_PAYMENT"
    | "BONUS_REWARDS"
    | "CARD_ACCESS"
    | "CASHBACK_OFFER"
    | "COMPLEMENTARY_PRODUCT_DISCOUNTS"
    | "DIGITAL_BANKING"
    | "DIGITAL_WALLET"
    | "DONATE_INTEREST"
    | "EXTRA_REPAYMENTS"
    | "FRAUD_PROTECTION"
    | "FREE_TXNS"
    | "FREE_TXNS_ALLOWANCE"
    | "GUARANTOR"
    | "INSURANCE"
    | "INSTALMENT_PLAN"
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
    /**
     * Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)
     */
    additionalValue?: string;
    /**
     * Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER
     */
    additionalInfo?: string;
    /**
     * Link to a web page with more information on this feature
     */
    additionalInfoUri?: string | null;
    [k: string]: unknown;
  }[]
  | null;
  /**
   * Constraints on the application for or operation of the product such as minimum balances or limit thresholds
   */
  constraints?:
  | {
    /**
     * The type of constraint described.  See the next section for an overview of valid values and their meaning
     */
    constraintType: "MAX_BALANCE" | "MAX_LIMIT" | "MIN_BALANCE" | "MIN_LIMIT" | "OPENING_BALANCE";
    /**
     * Generic field containing additional information relevant to the [constraintType](#tocSproductconstrainttypedoc) specified.  Whether mandatory or not is dependent on the value of [constraintType](#tocSproductconstrainttypedoc)
     */
    additionalValue?: string;
    /**
     * Display text providing more information the constraint
     */
    additionalInfo?: string;
    /**
     * Link to a web page with more information on the constraint
     */
    additionalInfoUri?: string;
    [k: string]: unknown;
  }[]
  | null;
  /**
   * Eligibility criteria for the product
   */
  eligibility?:
  | {
    /**
     * The type of eligibility criteria described.  See the next section for an overview of valid values and their meaning
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
    /**
     * Generic field containing additional information relevant to the [eligibilityType](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [eligibilityType](#tocSproducteligibilitytypedoc)
     */
    additionalValue?: string;
    /**
     * Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to OTHER
     */
    additionalInfo?: string;
    /**
     * Link to a web page with more information on this eligibility criteria
     */
    additionalInfoUri?: string | null;
    [k: string]: unknown;
  }[]
  | null;
  /**
   * Fees applicable for the product
   */
  fees?:
  | {
    /**
     * Name of the fee
     */
    name: string;
    /**
     * The type of fee
     */
    feeType:
    | "DEPOSIT"
    | "EVENT"
    | "EXIT"
    | "PAYMENT"
    | "PERIODIC"
    | "PURCHASE"
    | "TRANSACTION"
    | "UPFRONT"
    | "VARIABLE"
    | "WITHDRAWAL";
    /**
     * The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
     */
    amount?: string;
    /**
     * A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.
     */
    balanceRate?: string;
    /**
     * A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
     */
    transactionRate?: string;
    /**
     * A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
     */
    accruedRate?: string;
    /**
     * The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    accrualFrequency?: string | null;
    /**
     * The currency the fee will be charged in. Assumes AUD if absent
     */
    currency?: string | null;
    /**
     * Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)
     */
    additionalValue?: string;
    /**
     * Display text providing more information on the fee
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this fee
     */
    additionalInfoUri?: string | null;
    /**
     * An optional list of discounts to this fee that may be available
     */
    discounts?:
    | {
      /**
       * Description of the discount
       */
      description: string;
      /**
       * The type of discount. See the next section for an overview of valid values and their meaning
       */
      discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
      /**
       * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
       */
      amount?: string;
      /**
       * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
       */
      balanceRate?: string;
      /**
       * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory
       */
      transactionRate?: string;
      /**
       * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
       */
      accruedRate?: string;
      /**
       * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
       */
      feeRate?: string;
      /**
       * Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the discount
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this discount
       */
      additionalInfoUri?: string | null;
      /**
       * Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.
       */
      eligibility?: {
        /**
         * The type of the specific eligibility constraint for a discount
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
        /**
         * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
         */
        additionalValue?: string;
        /**
         * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
         */
        additionalInfo?: string;
        /**
         * Link to a web page with more information on this eligibility constraint
         */
        additionalInfoUri?: string | null;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }[]
    | null;
    [k: string]: unknown;
  }[]
  | null;
  /**
   * Interest rates available for deposits
   */
  depositRates?:
  | {
    /**
     * The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning
     */
    depositRateType:
    | "BONUS"
    | "BUNDLE_BONUS"
    | "FIXED"
    | "FLOATING"
    | "INTRODUCTORY"
    | "MARKET_LINKED"
    | "VARIABLE";
    /**
     * The rate to be applied
     */
    rate: string;
    /**
     * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    calculationFrequency?: string | null;
    /**
     * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    applicationFrequency?: string | null;
    /**
     * Rate tiers applicable for this rate
     */
    tiers?:
    | {
      /**
       * A display name for the tier
       */
      name: string;
      /**
       * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
       */
      unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
      /**
       * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
       */
      minimumValue: number;
      /**
       * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
       */
      maximumValue?: number | null;
      /**
       * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
       */
      rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
      /**
       * Defines a condition for the applicability of a tiered rate
       */
      applicabilityConditions?: {
        /**
         * Display text providing more information on the condition
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this condition
         */
        additionalInfoUri?: string | null;
        [k: string]: unknown;
      };
      /**
       * Display text providing more information on the rate tier.
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this rate tier
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)
     */
    additionalValue?: string;
    /**
     * Display text providing more information on the rate
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate
     */
    additionalInfoUri?: string | null;
    [k: string]: unknown;
  }[]
  | null;
  /**
   * Interest rates charged against lending balances
   */
  lendingRates?:
  | {
    /**
     * The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning
     */
    lendingRateType:
    | "BUNDLE_DISCOUNT_FIXED"
    | "BUNDLE_DISCOUNT_VARIABLE"
    | "CASH_ADVANCE"
    | "DISCOUNT"
    | "FIXED"
    | "FLOATING"
    | "INTRODUCTORY"
    | "MARKET_LINKED"
    | "PENALTY"
    | "PURCHASE"
    | "VARIABLE";
    /**
     * The rate to be applied
     */
    rate: string;
    /**
     * A comparison rate equivalent for this rate
     */
    comparisonRate?: string | null;
    /**
     * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    calculationFrequency?: string | null;
    /**
     * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    applicationFrequency?: string | null;
    /**
     * When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered
     */
    interestPaymentDue?: ("IN_ADVANCE" | "IN_ARREARS") | null;
    /**
     * Options in place for repayments. If absent, the lending rate is applicable to all repayment types
     */
    repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
    /**
     * The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes
     */
    loanPurpose?: ("INVESTMENT" | "OWNER_OCCUPIED") | null;
    /**
     * Rate tiers applicable for this rate
     */
    tiers?:
    | {
      /**
       * A display name for the tier
       */
      name: string;
      /**
       * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
       */
      unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
      /**
       * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
       */
      minimumValue: number;
      /**
       * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
       */
      maximumValue?: number | null;
      /**
       * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
       */
      rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
      /**
       * Defines a condition for the applicability of a tiered rate
       */
      applicabilityConditions?: {
        /**
         * Display text providing more information on the condition
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this condition
         */
        additionalInfoUri?: string | null;
        [k: string]: unknown;
      };
      /**
       * Display text providing more information on the rate tier.
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this rate tier
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)
     */
    additionalValue?: string;
    /**
     * Display text providing more information on the rate.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate
     */
    additionalInfoUri?: string | null;
    [k: string]: unknown;
  }[]
  | null;
  [k: string]: unknown;
};
export interface BankingProductDiscount {
  /**
   * Description of the discount
   */
  description: string;
  /**
   * The type of discount. See the next section for an overview of valid values and their meaning
   */
  discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
  /**
   * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
   */
  amount?: string;
  /**
   * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
   */
  balanceRate?: string;
  /**
   * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory
   */
  transactionRate?: string;
  /**
   * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
   */
  accruedRate?: string;
  /**
   * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
   */
  feeRate?: string;
  /**
   * Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)
   */
  additionalValue?: string;
  /**
   * Display text providing more information on the discount
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this discount
   */
  additionalInfoUri?: string | null;
  /**
   * Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.
   */
  eligibility?: {
    /**
     * The type of the specific eligibility constraint for a discount
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
    /**
     * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
     */
    additionalValue?: string;
    /**
     * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
     */
    additionalInfo?: string;
    /**
     * Link to a web page with more information on this eligibility constraint
     */
    additionalInfoUri?: string | null;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}

export interface BankingProductDiscountEligibility {
  /**
   * The type of the specific eligibility constraint for a discount
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
  /**
   * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
   */
  additionalValue?: string;
  /**
   * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
   */
  additionalInfo?: string;
  /**
   * Link to a web page with more information on this eligibility constraint
   */
  additionalInfoUri?: string | null;
  [k: string]: unknown;
}

export interface BankingProductEligibility {
  /**
   * The type of eligibility criteria described.  See the next section for an overview of valid values and their meaning
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
  /**
   * Generic field containing additional information relevant to the [eligibilityType](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [eligibilityType](#tocSproducteligibilitytypedoc)
   */
  additionalValue?: string;
  /**
   * Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to OTHER
   */
  additionalInfo?: string;
  /**
   * Link to a web page with more information on this eligibility criteria
   */
  additionalInfoUri?: string | null;
  [k: string]: unknown;
}
export interface BankingProductFeatureV2 {
  /**
   * The type of feature described
   */
  featureType:
  | "ADDITIONAL_CARDS"
  | "BALANCE_TRANSFERS"
  | "BILL_PAYMENT"
  | "BONUS_REWARDS"
  | "CARD_ACCESS"
  | "CASHBACK_OFFER"
  | "COMPLEMENTARY_PRODUCT_DISCOUNTS"
  | "DIGITAL_BANKING"
  | "DIGITAL_WALLET"
  | "DONATE_INTEREST"
  | "EXTRA_REPAYMENTS"
  | "FRAUD_PROTECTION"
  | "FREE_TXNS"
  | "FREE_TXNS_ALLOWANCE"
  | "GUARANTOR"
  | "INSURANCE"
  | "INSTALMENT_PLAN"
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
  /**
   * Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)
   */
  additionalValue?: string;
  /**
   * Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER
   */
  additionalInfo?: string;
  /**
   * Link to a web page with more information on this feature
   */
  additionalInfoUri?: string | null;
  [k: string]: unknown;
}
export interface BankingProductFee {
  /**
   * Name of the fee
   */
  name: string;
  /**
   * The type of fee
   */
  feeType:
  | "DEPOSIT"
  | "EVENT"
  | "EXIT"
  | "PAYMENT"
  | "PERIODIC"
  | "PURCHASE"
  | "TRANSACTION"
  | "UPFRONT"
  | "VARIABLE"
  | "WITHDRAWAL";
  /**
   * The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
   */
  amount?: string;
  /**
   * A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.
   */
  balanceRate?: string;
  /**
   * A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
   */
  transactionRate?: string;
  /**
   * A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
   */
  accruedRate?: string;
  /**
   * The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
   */
  accrualFrequency?: string | null;
  /**
   * The currency the fee will be charged in. Assumes AUD if absent
   */
  currency?: string | null;
  /**
   * Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)
   */
  additionalValue?: string;
  /**
   * Display text providing more information on the fee
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this fee
   */
  additionalInfoUri?: string | null;
  /**
   * An optional list of discounts to this fee that may be available
   */
  discounts?:
  | {
    /**
     * Description of the discount
     */
    description: string;
    /**
     * The type of discount. See the next section for an overview of valid values and their meaning
     */
    discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
    /**
     * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
     */
    amount?: string;
    /**
     * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
     */
    balanceRate?: string;
    /**
     * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory
     */
    transactionRate?: string;
    /**
     * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
     */
    accruedRate?: string;
    /**
     * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
     */
    feeRate?: string;
    /**
     * Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)
     */
    additionalValue?: string;
    /**
     * Display text providing more information on the discount
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this discount
     */
    additionalInfoUri?: string | null;
    /**
     * Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.
     */
    eligibility?: {
      /**
       * The type of the specific eligibility constraint for a discount
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
      /**
       * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
       */
      additionalInfo?: string;
      /**
       * Link to a web page with more information on this eligibility constraint
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  }[]
  | null;
  [k: string]: unknown;
}
export interface BankingProductLendingRateV2 {
  /**
   * The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning
   */
  lendingRateType:
  | "BUNDLE_DISCOUNT_FIXED"
  | "BUNDLE_DISCOUNT_VARIABLE"
  | "CASH_ADVANCE"
  | "DISCOUNT"
  | "FIXED"
  | "FLOATING"
  | "INTRODUCTORY"
  | "MARKET_LINKED"
  | "PENALTY"
  | "PURCHASE"
  | "VARIABLE";
  /**
   * The rate to be applied
   */
  rate: string;
  /**
   * A comparison rate equivalent for this rate
   */
  comparisonRate?: string | null;
  /**
   * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
   */
  calculationFrequency?: string | null;
  /**
   * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
   */
  applicationFrequency?: string | null;
  /**
   * When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered
   */
  interestPaymentDue?: ("IN_ADVANCE" | "IN_ARREARS") | null;
  /**
   * Options in place for repayments. If absent, the lending rate is applicable to all repayment types
   */
  repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
  /**
   * The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes
   */
  loanPurpose?: ("INVESTMENT" | "OWNER_OCCUPIED") | null;
  /**
   * Rate tiers applicable for this rate
   */
  tiers?:
  | {
    /**
     * A display name for the tier
     */
    name: string;
    /**
     * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
     */
    unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
    /**
     * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
     */
    minimumValue: number;
    /**
     * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
     */
    maximumValue?: number | null;
    /**
     * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
     */
    rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
    /**
     * Defines a condition for the applicability of a tiered rate
     */
    applicabilityConditions?: {
      /**
       * Display text providing more information on the condition
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this condition
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    };
    /**
     * Display text providing more information on the rate tier.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate tier
     */
    additionalInfoUri?: string | null;
    [k: string]: unknown;
  }[]
  | null;
  /**
   * Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)
   */
  additionalValue?: string;
  /**
   * Display text providing more information on the rate.
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this rate
   */
  additionalInfoUri?: string | null;
  [k: string]: unknown;
}

/**
 * Defines a condition for the applicability of a tiered rate
 */
export interface BankingProductRateCondition {
  /**
   * Display text providing more information on the condition
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this condition
   */
  additionalInfoUri?: string | null;
  [k: string]: unknown;
}
/**
 * Defines the criteria and conditions for which a rate applies
 */
export interface BankingProductRateTierV3 {
  /**
   * A display name for the tier
   */
  name: string;
  /**
   * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
   */
  unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
  /**
   * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
   */
  minimumValue: number;
  /**
   * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
   */
  maximumValue?: number | null;
  /**
   * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
   */
  rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
  /**
   * Defines a condition for the applicability of a tiered rate
   */
  applicabilityConditions?: {
    /**
     * Display text providing more information on the condition
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this condition
     */
    additionalInfoUri?: string | null;
    [k: string]: unknown;
  };
  /**
   * Display text providing more information on the rate tier.
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this rate tier
   */
  additionalInfoUri?: string | null;
  [k: string]: unknown;
}
export interface BankingProductV4 {
  /**
   * A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
   */
  productId: string;
  /**
   * The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate
   */
  effectiveFrom?: string | null;
  /**
   * The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products
   */
  effectiveTo?: string | null;
  /**
   * The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)
   */
  lastUpdated: string;
  /**
   * The category to which a product or account belongs. See [here](#product-categories) for more details
   */
  productCategory:
  | "BUSINESS_LOANS"
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
  /**
   * The display name of the product
   */
  name: string;
  /**
   * A description of the product
   */
  description: string;
  /**
   * A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required
   */
  brand: string;
  /**
   * An optional display name of the brand
   */
  brandName?: string | null;
  /**
   * A link to an application web page where this product can be applied for.
   */
  applicationUri?: string | null;
  /**
   * Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable
   */
  isTailored: boolean;
  /**
   * Object that contains links to additional information on specific topics
   */
  additionalInformation?: {
    /**
     * General overview of the product
     */
    overviewUri?: string | null;
    /**
     * Terms and conditions for the product
     */
    termsUri?: string | null;
    /**
     * Eligibility rules and criteria for the product
     */
    eligibilityUri?: string | null;
    /**
     * Description of fees, pricing, discounts, exemptions and bonuses for the product
     */
    feesAndPricingUri?: string | null;
    /**
     * Description of a bundle that this product can be part of
     */
    bundleUri?: string | null;
    [k: string]: unknown;
  } | null;
  /**
   * An array of card art images
   */
  cardArt?:
  | {
    /**
     * Display label for the specific image
     */
    title?: string | null;
    /**
     * URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI [RFC 2397](https://tools.ietf.org/html/rfc2397)
     */
    imageUri: string;
    [k: string]: unknown;
  }[]
  | null;
  [k: string]: unknown;
}
export interface BankingScheduledPayment {
  /**
   * A unique ID of the scheduled payment adhering to the standards for ID permanence
   */
  scheduledPaymentId: string;
  /**
   * The short display name of the scheduled payment as provided by the customer if provided. Where a customer has not provided a nickname, a display name derived by the bank for the scheduled payment should be provided that is consistent with existing digital banking channels
   */
  nickname?: string | null;
  /**
   * The reference for the transaction that will be used by the originating institution for the purposes of constructing a statement narrative on the payer’s account. Empty string if no data provided
   */
  payerReference: string;
  /**
   * The reference for the transaction, if applicable, that will be provided by the originating institution for all payments in the payment set. Empty string if no data provided
   */
  payeeReference?: string;
  /**
   * Indicates whether the schedule is currently active. The value SKIP is equivalent to ACTIVE except that the customer has requested the next normal occurrence to be skipped.
   */
  status: "ACTIVE" | "INACTIVE" | "SKIP";
  /**
   * Object containing details of the source of the payment. Currently only specifies an account ID but provided as an object to facilitate future extensibility and consistency with the to object
   */
  from: {
    /**
     * ID of the account that is the source of funds for the payment
     */
    accountId: string;
    [k: string]: unknown;
  };
  paymentSet: {
    /**
     * Object containing details of the destination of the payment. Used to specify a variety of payment destination types
     */
    to: {
      /**
       * The type of object provided that specifies the destination of the funds for the payment.
       */
      toUType: "accountId" | "biller" | "domestic" | "international" | "payeeId";
      /**
       * Present if toUType is set to accountId. Indicates that the payment is to another account that is accessible under the current consent
       */
      accountId?: string;
      /**
       * Present if toUType is set to payeeId. Indicates that the payment is to registered payee that can be accessed using the payee end point. If the Bank Payees scope has not been consented to then a payeeId should not be provided and the full payee details should be provided instead
       */
      payeeId?: string;
      /**
       * The short display name of the payee as provided by the customer unless toUType is set to payeeId. Where a customer has not provided a nickname, a display name derived by the bank for payee should be provided that is consistent with existing digital banking channels
       */
      nickname?: string;
      /**
       * The reference for the transaction, if applicable, that will be provided by the originating institution for the specific payment. If not empty, it overrides the value provided at the BankingScheduledPayment level.
       */
      payeeReference?: string;
      domestic?: {
        /**
         * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
         */
        payeeAccountUType: "account" | "card" | "payId";
        account?: {
          /**
           * Name of the account to pay to
           */
          accountName?: string | null;
          /**
           * BSB of the account to pay to
           */
          bsb: string;
          /**
           * Number of the account to pay to
           */
          accountNumber: string;
          [k: string]: unknown;
        };
        card?: {
          /**
           * Name of the account to pay to
           */
          cardNumber: string;
          [k: string]: unknown;
        };
        payId?: {
          /**
           * The name assigned to the PayID by the owner of the PayID
           */
          name?: string | null;
          /**
           * The identifier of the PayID (dependent on type)
           */
          identifier: string;
          /**
           * The type of the PayID
           */
          type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      biller?: {
        /**
         * BPAY Biller Code of the Biller
         */
        billerCode: string;
        /**
         * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
         */
        crn?: string | null;
        /**
         * Name of the Biller
         */
        billerName: string;
        [k: string]: unknown;
      };
      international?: {
        beneficiaryDetails: {
          /**
           * Name of the beneficiary
           */
          name?: string | null;
          /**
           * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
           */
          country: string;
          /**
           * Response message for the payment
           */
          message?: string | null;
          [k: string]: unknown;
        };
        bankDetails: {
          /**
           * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
           */
          country: string;
          /**
           * Account Targeted for payment
           */
          accountNumber: string;
          bankAddress?: {
            /**
             * Name of the recipient Bank
             */
            name: string;
            /**
             * Address of the recipient Bank
             */
            address: string;
            [k: string]: unknown;
          } | null;
          /**
           * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
           */
          beneficiaryBankBIC?: string | null;
          /**
           * Number for Fedwire payment (Federal Reserve Wire Network)
           */
          fedWireNumber?: string | null;
          /**
           * Sort code used for account identification in some jurisdictions
           */
          sortCode?: string | null;
          /**
           * Number for the Clearing House Interbank Payments System
           */
          chipNumber?: string | null;
          /**
           * International bank routing number
           */
          routingNumber?: string | null;
          /**
           * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
           */
          legalEntityIdentifier?: string | null;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Flag indicating whether the amount of the payment is calculated based on the context of the event. For instance a payment to reduce the balance of a credit card to zero. If absent then false is assumed
     */
    isAmountCalculated?: boolean | null;
    /**
     * The amount of the next payment if known. Mandatory unless the isAmountCalculated field is set to true. Must be zero or positive if present
     */
    amount?: string;
    /**
     * The currency for the payment. AUD assumed if not present
     */
    currency?: string | null;
    [k: string]: unknown;
  }[];
  /**
   * Object containing the detail of the schedule for the payment
   */
  recurrence: {
    /**
     * The date of the next payment under the recurrence schedule
     */
    nextPaymentDate?: string | null;
    /**
     * The type of recurrence used to define the schedule
     */
    recurrenceUType: "eventBased" | "intervalSchedule" | "lastWeekDay" | "onceOff";
    /**
     * Indicates that the payment is a once off payment on a specific future date. Mandatory if recurrenceUType is set to onceOff
     */
    onceOff?: {
      /**
       * The scheduled date for the once off payment
       */
      paymentDate: string;
      [k: string]: unknown;
    };
    /**
     * Indicates that the schedule of payments is defined by a series of intervals. Mandatory if recurrenceUType is set to intervalSchedule
     */
    intervalSchedule?: {
      /**
       * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
       */
      finalPaymentDate?: string | null;
      /**
       * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely
       */
      paymentsRemaining?: number | null;
      /**
       * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
       */
      nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
      /**
       * An array of interval objects defining the payment schedule.  Each entry in the array is additive, in that it adds payments to the overall payment schedule.  If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry
       */
      intervals: {
        /**
         * An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)  (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
         */
        interval: string;
        /**
         * Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is P1D. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.
         */
        dayInInterval?: string | null;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    /**
     * Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if recurrenceUType is set to lastWeekDay
     */
    lastWeekDay?: {
      /**
       * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
       */
      finalPaymentDate?: string | null;
      /**
       * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
       */
      paymentsRemaining?: number | null;
      /**
       * The interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
       */
      interval: string;
      /**
       * The weekDay specified. The payment will occur on the last occurrence of this weekday in the interval.
       */
      lastWeekDay: "FRI" | "MON" | "SAT" | "SUN" | "THU" | "TUE" | "WED";
      /**
       * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
       */
      nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
      [k: string]: unknown;
    };
    /**
     * Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if recurrenceUType is set to eventBased
     */
    eventBased?: {
      /**
       * Description of the event and conditions that will result in the payment. Expected to be formatted for display to a customer
       */
      description: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/**
 * Object containing details of the source of the payment. Currently only specifies an account ID but provided as an object to facilitate future extensibility and consistency with the to object
 */
export interface BankingScheduledPaymentFrom {
  /**
   * ID of the account that is the source of funds for the payment
   */
  accountId: string;
  [k: string]: unknown;
}
export interface BankingScheduledPaymentInterval {
  /**
   * An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)  (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
   */
  interval: string;
  /**
   * Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is P1D. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.
   */
  dayInInterval?: string | null;
  [k: string]: unknown;
}
/**
 * Object containing the detail of the schedule for the payment
 */
export interface BankingScheduledPaymentRecurrence {
  /**
   * The date of the next payment under the recurrence schedule
   */
  nextPaymentDate?: string | null;
  /**
   * The type of recurrence used to define the schedule
   */
  recurrenceUType: "eventBased" | "intervalSchedule" | "lastWeekDay" | "onceOff";
  /**
   * Indicates that the payment is a once off payment on a specific future date. Mandatory if recurrenceUType is set to onceOff
   */
  onceOff?: {
    /**
     * The scheduled date for the once off payment
     */
    paymentDate: string;
    [k: string]: unknown;
  };
  /**
   * Indicates that the schedule of payments is defined by a series of intervals. Mandatory if recurrenceUType is set to intervalSchedule
   */
  intervalSchedule?: {
    /**
     * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
     */
    finalPaymentDate?: string | null;
    /**
     * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely
     */
    paymentsRemaining?: number | null;
    /**
     * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
     */
    nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
    /**
     * An array of interval objects defining the payment schedule.  Each entry in the array is additive, in that it adds payments to the overall payment schedule.  If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry
     */
    intervals: {
      /**
       * An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)  (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
       */
      interval: string;
      /**
       * Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is P1D. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.
       */
      dayInInterval?: string | null;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  /**
   * Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if recurrenceUType is set to lastWeekDay
   */
  lastWeekDay?: {
    /**
     * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
     */
    finalPaymentDate?: string | null;
    /**
     * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
     */
    paymentsRemaining?: number | null;
    /**
     * The interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
     */
    interval: string;
    /**
     * The weekDay specified. The payment will occur on the last occurrence of this weekday in the interval.
     */
    lastWeekDay: "FRI" | "MON" | "SAT" | "SUN" | "THU" | "TUE" | "WED";
    /**
     * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
     */
    nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
    [k: string]: unknown;
  };
  /**
   * Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if recurrenceUType is set to eventBased
   */
  eventBased?: {
    /**
     * Description of the event and conditions that will result in the payment. Expected to be formatted for display to a customer
     */
    description: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/**
 * Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if recurrenceUType is set to eventBased
 */
export interface BankingScheduledPaymentRecurrenceEventBased {
  /**
   * Description of the event and conditions that will result in the payment. Expected to be formatted for display to a customer
   */
  description: string;
  [k: string]: unknown;
}
/**
 * Indicates that the schedule of payments is defined by a series of intervals. Mandatory if recurrenceUType is set to intervalSchedule
 */
export interface BankingScheduledPaymentRecurrenceIntervalSchedule {
  /**
   * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
   */
  finalPaymentDate?: string | null;
  /**
   * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely
   */
  paymentsRemaining?: number | null;
  /**
   * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
   */
  nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
  /**
   * An array of interval objects defining the payment schedule.  Each entry in the array is additive, in that it adds payments to the overall payment schedule.  If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry
   */
  intervals: {
    /**
     * An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)  (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
     */
    interval: string;
    /**
     * Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is P1D. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.
     */
    dayInInterval?: string | null;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
/**
 * Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if recurrenceUType is set to lastWeekDay
 */
export interface BankingScheduledPaymentRecurrenceLastWeekday {
  /**
   * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
   */
  finalPaymentDate?: string | null;
  /**
   * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
   */
  paymentsRemaining?: number | null;
  /**
   * The interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
   */
  interval: string;
  /**
   * The weekDay specified. The payment will occur on the last occurrence of this weekday in the interval.
   */
  lastWeekDay: "FRI" | "MON" | "SAT" | "SUN" | "THU" | "TUE" | "WED";
  /**
   * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
   */
  nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
  [k: string]: unknown;
}
/**
 * Indicates that the payment is a once off payment on a specific future date. Mandatory if recurrenceUType is set to onceOff
 */
export interface BankingScheduledPaymentRecurrenceOnceOff {
  /**
   * The scheduled date for the once off payment
   */
  paymentDate: string;
  [k: string]: unknown;
}

/**
 * The set of payment amounts and destination accounts for this payment accommodating multi-part payments. A single entry indicates a simple payment with one destination account. Must have at least one entry
 */
export interface BankingScheduledPaymentSet {
  /**
   * Object containing details of the destination of the payment. Used to specify a variety of payment destination types
   */
  to: {
    /**
     * The type of object provided that specifies the destination of the funds for the payment.
     */
    toUType: "accountId" | "biller" | "domestic" | "international" | "payeeId";
    /**
     * Present if toUType is set to accountId. Indicates that the payment is to another account that is accessible under the current consent
     */
    accountId?: string;
    /**
     * Present if toUType is set to payeeId. Indicates that the payment is to registered payee that can be accessed using the payee end point. If the Bank Payees scope has not been consented to then a payeeId should not be provided and the full payee details should be provided instead
     */
    payeeId?: string;
    /**
     * The short display name of the payee as provided by the customer unless toUType is set to payeeId. Where a customer has not provided a nickname, a display name derived by the bank for payee should be provided that is consistent with existing digital banking channels
     */
    nickname?: string;
    /**
     * The reference for the transaction, if applicable, that will be provided by the originating institution for the specific payment. If not empty, it overrides the value provided at the BankingScheduledPayment level.
     */
    payeeReference?: string;
    domestic?: {
      /**
       * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
       */
      payeeAccountUType: "account" | "card" | "payId";
      account?: {
        /**
         * Name of the account to pay to
         */
        accountName?: string | null;
        /**
         * BSB of the account to pay to
         */
        bsb: string;
        /**
         * Number of the account to pay to
         */
        accountNumber: string;
        [k: string]: unknown;
      };
      card?: {
        /**
         * Name of the account to pay to
         */
        cardNumber: string;
        [k: string]: unknown;
      };
      payId?: {
        /**
         * The name assigned to the PayID by the owner of the PayID
         */
        name?: string | null;
        /**
         * The identifier of the PayID (dependent on type)
         */
        identifier: string;
        /**
         * The type of the PayID
         */
        type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    biller?: {
      /**
       * BPAY Biller Code of the Biller
       */
      billerCode: string;
      /**
       * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
       */
      crn?: string | null;
      /**
       * Name of the Biller
       */
      billerName: string;
      [k: string]: unknown;
    };
    international?: {
      beneficiaryDetails: {
        /**
         * Name of the beneficiary
         */
        name?: string | null;
        /**
         * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
         */
        country: string;
        /**
         * Response message for the payment
         */
        message?: string | null;
        [k: string]: unknown;
      };
      bankDetails: {
        /**
         * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
         */
        country: string;
        /**
         * Account Targeted for payment
         */
        accountNumber: string;
        bankAddress?: {
          /**
           * Name of the recipient Bank
           */
          name: string;
          /**
           * Address of the recipient Bank
           */
          address: string;
          [k: string]: unknown;
        } | null;
        /**
         * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
         */
        beneficiaryBankBIC?: string | null;
        /**
         * Number for Fedwire payment (Federal Reserve Wire Network)
         */
        fedWireNumber?: string | null;
        /**
         * Sort code used for account identification in some jurisdictions
         */
        sortCode?: string | null;
        /**
         * Number for the Clearing House Interbank Payments System
         */
        chipNumber?: string | null;
        /**
         * International bank routing number
         */
        routingNumber?: string | null;
        /**
         * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
         */
        legalEntityIdentifier?: string | null;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * Flag indicating whether the amount of the payment is calculated based on the context of the event. For instance a payment to reduce the balance of a credit card to zero. If absent then false is assumed
   */
  isAmountCalculated?: boolean | null;
  /**
   * The amount of the next payment if known. Mandatory unless the isAmountCalculated field is set to true. Must be zero or positive if present
   */
  amount?: string;
  /**
   * The currency for the payment. AUD assumed if not present
   */
  currency?: string | null;
  [k: string]: unknown;
}
/**
 * Object containing details of the destination of the payment. Used to specify a variety of payment destination types
 */
export interface BankingScheduledPaymentTo {
  /**
   * The type of object provided that specifies the destination of the funds for the payment.
   */
  toUType: "accountId" | "biller" | "domestic" | "international" | "payeeId";
  /**
   * Present if toUType is set to accountId. Indicates that the payment is to another account that is accessible under the current consent
   */
  accountId?: string;
  /**
   * Present if toUType is set to payeeId. Indicates that the payment is to registered payee that can be accessed using the payee end point. If the Bank Payees scope has not been consented to then a payeeId should not be provided and the full payee details should be provided instead
   */
  payeeId?: string;
  /**
   * The short display name of the payee as provided by the customer unless toUType is set to payeeId. Where a customer has not provided a nickname, a display name derived by the bank for payee should be provided that is consistent with existing digital banking channels
   */
  nickname?: string;
  /**
   * The reference for the transaction, if applicable, that will be provided by the originating institution for the specific payment. If not empty, it overrides the value provided at the BankingScheduledPayment level.
   */
  payeeReference?: string;
  domestic?: {
    /**
     * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
     */
    payeeAccountUType: "account" | "card" | "payId";
    account?: {
      /**
       * Name of the account to pay to
       */
      accountName?: string | null;
      /**
       * BSB of the account to pay to
       */
      bsb: string;
      /**
       * Number of the account to pay to
       */
      accountNumber: string;
      [k: string]: unknown;
    };
    card?: {
      /**
       * Name of the account to pay to
       */
      cardNumber: string;
      [k: string]: unknown;
    };
    payId?: {
      /**
       * The name assigned to the PayID by the owner of the PayID
       */
      name?: string | null;
      /**
       * The identifier of the PayID (dependent on type)
       */
      identifier: string;
      /**
       * The type of the PayID
       */
      type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  biller?: {
    /**
     * BPAY Biller Code of the Biller
     */
    billerCode: string;
    /**
     * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
     */
    crn?: string | null;
    /**
     * Name of the Biller
     */
    billerName: string;
    [k: string]: unknown;
  };
  international?: {
    beneficiaryDetails: {
      /**
       * Name of the beneficiary
       */
      name?: string | null;
      /**
       * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
       */
      country: string;
      /**
       * Response message for the payment
       */
      message?: string | null;
      [k: string]: unknown;
    };
    bankDetails: {
      /**
       * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
       */
      country: string;
      /**
       * Account Targeted for payment
       */
      accountNumber: string;
      bankAddress?: {
        /**
         * Name of the recipient Bank
         */
        name: string;
        /**
         * Address of the recipient Bank
         */
        address: string;
        [k: string]: unknown;
      } | null;
      /**
       * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
       */
      beneficiaryBankBIC?: string | null;
      /**
       * Number for Fedwire payment (Federal Reserve Wire Network)
       */
      fedWireNumber?: string | null;
      /**
       * Sort code used for account identification in some jurisdictions
       */
      sortCode?: string | null;
      /**
       * Number for the Clearing House Interbank Payments System
       */
      chipNumber?: string | null;
      /**
       * International bank routing number
       */
      routingNumber?: string | null;
      /**
       * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
       */
      legalEntityIdentifier?: string | null;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface BankingTermDepositAccount {
  /**
   * The lodgement date of the original deposit
   */
  lodgementDate: string;
  /**
   * Maturity date for the term deposit
   */
  maturityDate: string;
  /**
   * Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated
   */
  maturityAmount?: string | null;
  /**
   * If absent assumes AUD
   */
  maturityCurrency?: string | null;
  /**
   * Current instructions on action to be taken at maturity. This includes default actions that may be specified in the terms and conditions for the product e.g. roll-over to the same term and frequency of interest payments
   */
  maturityInstructions: "HOLD_ON_MATURITY" | "PAID_OUT_AT_MATURITY" | "ROLLED_OVER";
  [k: string]: unknown;
}
export interface BankingTransaction {
  /**
   * ID of the account for which transactions are provided
   */
  accountId: string;
  /**
   * A unique ID of the transaction adhering to the standards for ID permanence.  This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type. It is mandatory if `isDetailAvailable` is set to true.
   */
  transactionId?: string | null;
  /**
   * True if extended information is available using the transaction detail end point. False if extended data is not available
   */
  isDetailAvailable: boolean;
  /**
   * The type of the transaction
   */
  type:
  | "DIRECT_DEBIT"
  | "FEE"
  | "INTEREST_CHARGED"
  | "INTEREST_PAID"
  | "OTHER"
  | "PAYMENT"
  | "TRANSFER_INCOMING"
  | "TRANSFER_OUTGOING";
  /**
   * Status of the transaction whether pending or posted. Note that there is currently no provision in the standards to guarantee the ability to correlate a pending transaction with an associated posted transaction
   */
  status: "PENDING" | "POSTED";
  /**
   * The transaction description as applied by the financial institution
   */
  description: string;
  /**
   * The time the transaction was posted. This field is Mandatory if the transaction has status POSTED.  This is the time that appears on a standard statement
   */
  postingDateTime?: string;
  /**
   * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry
   */
  valueDateTime?: string | null;
  /**
   * The time the transaction was executed by the originating customer, if available
   */
  executionDateTime?: string | null;
  /**
   * The value of the transaction. Negative values mean money was outgoing from the account
   */
  amount: string;
  /**
   * The currency for the transaction amount. AUD assumed if not present
   */
  currency?: string | null;
  /**
   * The reference for the transaction provided by the originating institution. Empty string if no data provided
   */
  reference: string;
  /**
   * Name of the merchant for an outgoing payment to a merchant
   */
  merchantName?: string | null;
  /**
   * The merchant category code (or MCC) for an outgoing payment to a merchant
   */
  merchantCategoryCode?: string | null;
  /**
   * BPAY Biller Code for the transaction (if available)
   */
  billerCode?: string | null;
  /**
   * Name of the BPAY biller for the transaction (if available)
   */
  billerName?: string;
  /**
   * BPAY CRN for the transaction (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
   */
  crn?: string | null;
  /**
   * 6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.
   */
  apcaNumber?: string;
  [k: string]: unknown;
}

export type BankingTransactionDetail = {
  /**
   * ID of the account for which transactions are provided
   */
  accountId: string;
  /**
   * A unique ID of the transaction adhering to the standards for ID permanence.  This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type. It is mandatory if `isDetailAvailable` is set to true.
   */
  transactionId?: string | null;
  /**
   * True if extended information is available using the transaction detail end point. False if extended data is not available
   */
  isDetailAvailable: boolean;
  /**
   * The type of the transaction
   */
  type:
  | "DIRECT_DEBIT"
  | "FEE"
  | "INTEREST_CHARGED"
  | "INTEREST_PAID"
  | "OTHER"
  | "PAYMENT"
  | "TRANSFER_INCOMING"
  | "TRANSFER_OUTGOING";
  /**
   * Status of the transaction whether pending or posted. Note that there is currently no provision in the standards to guarantee the ability to correlate a pending transaction with an associated posted transaction
   */
  status: "PENDING" | "POSTED";
  /**
   * The transaction description as applied by the financial institution
   */
  description: string;
  /**
   * The time the transaction was posted. This field is Mandatory if the transaction has status POSTED.  This is the time that appears on a standard statement
   */
  postingDateTime?: string;
  /**
   * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry
   */
  valueDateTime?: string | null;
  /**
   * The time the transaction was executed by the originating customer, if available
   */
  executionDateTime?: string | null;
  /**
   * The value of the transaction. Negative values mean money was outgoing from the account
   */
  amount: string;
  /**
   * The currency for the transaction amount. AUD assumed if not present
   */
  currency?: string | null;
  /**
   * The reference for the transaction provided by the originating institution. Empty string if no data provided
   */
  reference: string;
  /**
   * Name of the merchant for an outgoing payment to a merchant
   */
  merchantName?: string | null;
  /**
   * The merchant category code (or MCC) for an outgoing payment to a merchant
   */
  merchantCategoryCode?: string | null;
  /**
   * BPAY Biller Code for the transaction (if available)
   */
  billerCode?: string | null;
  /**
   * Name of the BPAY biller for the transaction (if available)
   */
  billerName?: string;
  /**
   * BPAY CRN for the transaction (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
   */
  crn?: string | null;
  /**
   * 6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.
   */
  apcaNumber?: string;
  [k: string]: unknown;
} & {
  extendedData: {
    /**
     * Label of the originating payer. Mandatory for inbound payment
     */
    payer?: string | null;
    /**
     * Label of the target PayID.  Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID)
     */
    payee?: string | null;
    /**
     * Optional extended data provided specific to transaction originated via NPP
     */
    extensionUType?: "x2p101Payload" | null;
    x2p101Payload?: {
      /**
       * An extended string description. Only present if specified by the extensionUType field
       */
      extendedDescription: string;
      /**
       * An end to end ID for the payment created at initiation
       */
      endToEndId?: string | null;
      /**
       * Purpose of the payment.  Format is defined by NPP standards for the x2p1.01 overlay service
       */
      purposeCode?: string | null;
      [k: string]: unknown;
    } | null;
    /**
     * Identifier of the applicable overlay service. Valid values are: X2P1.01
     */
    service: "X2P1.01";
    [k: string]: unknown;
  };
  [k: string]: unknown;
};
export interface RequestAccountIds {
  data: {
    accountIds: string[];
    [k: string]: unknown;
  };
  meta?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ResponseBankingAccountByIdV2 {
  data: {
    /**
     * A unique ID of the account adhering to the standards for ID permanence
     */
    accountId: string;
    /**
     * Date that the account was created (if known)
     */
    creationDate?: string | null;
    /**
     * The display name of the account as defined by the bank. This should not incorporate account numbers or PANs. If it does the values should be masked according to the rules of the MaskedAccountString common type.
     */
    displayName: string;
    /**
     * A customer supplied nick name for the account
     */
    nickname?: string | null;
    /**
     * Open or closed status for the account. If not present then OPEN is assumed
     */
    openStatus?: ("CLOSED" | "OPEN") | null;
    /**
     * Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then 'true' is assumed
     */
    isOwned?: boolean | null;
    /**
     * A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number
     */
    maskedNumber: string;
    /**
     * The category to which a product or account belongs. See [here](#product-categories) for more details
     */
    productCategory:
    | "BUSINESS_LOANS"
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
    /**
     * The unique identifier of the account as defined by the data holder (akin to model number for the account)
     */
    productName: string;
    [k: string]: unknown;
  } & {
    /**
     * The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces
     */
    bsb?: string | null;
    /**
     * The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces
     */
    accountNumber?: string | null;
    /**
     * Optional field to indicate if this account is part of a bundle that is providing additional benefit for to the customer
     */
    bundleName?: string | null;
    /**
     * The type of structure to present account specific fields.
     */
    specificAccountUType?: ("creditCard" | "loan" | "termDeposit") | null;
    termDeposit?:
    | {
      /**
       * The lodgement date of the original deposit
       */
      lodgementDate: string;
      /**
       * Maturity date for the term deposit
       */
      maturityDate: string;
      /**
       * Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated
       */
      maturityAmount?: string | null;
      /**
       * If absent assumes AUD
       */
      maturityCurrency?: string | null;
      /**
       * Current instructions on action to be taken at maturity. This includes default actions that may be specified in the terms and conditions for the product e.g. roll-over to the same term and frequency of interest payments
       */
      maturityInstructions: "HOLD_ON_MATURITY" | "PAID_OUT_AT_MATURITY" | "ROLLED_OVER";
      [k: string]: unknown;
    }[]
    | null;
    creditCard?: {
      /**
       * The minimum payment amount due for the next card payment
       */
      minPaymentAmount: string;
      /**
       * The amount due for the next card payment
       */
      paymentDueAmount: string;
      /**
       * If absent assumes AUD
       */
      paymentCurrency?: string;
      /**
       * Date that the next payment for the card is due
       */
      paymentDueDate: string;
      [k: string]: unknown;
    } | null;
    loan?: {
      /**
       * Optional original start date for the loan
       */
      originalStartDate?: string | null;
      /**
       * Optional original loan value
       */
      originalLoanAmount?: string | null;
      /**
       * If absent assumes AUD
       */
      originalLoanCurrency?: string | null;
      /**
       * Date that the loan is due to be repaid in full
       */
      loanEndDate: string;
      /**
       * Next date that an instalment is required
       */
      nextInstalmentDate: string;
      /**
       * Minimum amount of next instalment
       */
      minInstalmentAmount?: string | null;
      /**
       * If absent assumes AUD
       */
      minInstalmentCurrency?: string | null;
      /**
       * Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account
       */
      maxRedraw?: string | null;
      /**
       * If absent assumes AUD
       */
      maxRedrawCurrency?: string | null;
      /**
       * Minimum redraw amount
       */
      minRedraw?: string | null;
      /**
       * If absent assumes AUD
       */
      minRedrawCurrency?: string | null;
      /**
       * Set to true if one or more offset accounts are configured for this loan account
       */
      offsetAccountEnabled?: boolean | null;
      /**
       * The accountIDs of the configured offset accounts attached to this loan. Only offset accounts that can be accessed under the current authorisation should be included. It is expected behaviour that offsetAccountEnabled is set to true but the offsetAccountIds field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation
       */
      offsetAccountIds?: string[] | null;
      /**
       * Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST
       */
      repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
      /**
       * The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      repaymentFrequency: string;
      [k: string]: unknown;
    } | null;
    /**
     * current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call
     */
    depositRate?: string | null;
    /**
     * The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call
     */
    lendingRate?: string | null;
    /**
     * Fully described deposit rates for this account based on the equivalent structure in Product Reference
     */
    depositRates?:
    | {
      /**
       * The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning
       */
      depositRateType:
      | "BONUS"
      | "BUNDLE_BONUS"
      | "FIXED"
      | "FLOATING"
      | "INTRODUCTORY"
      | "MARKET_LINKED"
      | "VARIABLE";
      /**
       * The rate to be applied
       */
      rate: string;
      /**
       * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      calculationFrequency?: string | null;
      /**
       * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      applicationFrequency?: string | null;
      /**
       * Rate tiers applicable for this rate
       */
      tiers?:
      | {
        /**
         * A display name for the tier
         */
        name: string;
        /**
         * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
         */
        unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
        /**
         * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
         */
        minimumValue: number;
        /**
         * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
         */
        maximumValue?: number | null;
        /**
         * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
         */
        rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
        /**
         * Defines a condition for the applicability of a tiered rate
         */
        applicabilityConditions?: {
          /**
           * Display text providing more information on the condition
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this condition
           */
          additionalInfoUri?: string | null;
          [k: string]: unknown;
        };
        /**
         * Display text providing more information on the rate tier.
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this rate tier
         */
        additionalInfoUri?: string | null;
        [k: string]: unknown;
      }[]
      | null;
      /**
       * Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the rate
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this rate
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Fully described deposit rates for this account based on the equivalent structure in Product Reference
     */
    lendingRates?:
    | {
      /**
       * The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning
       */
      lendingRateType:
      | "BUNDLE_DISCOUNT_FIXED"
      | "BUNDLE_DISCOUNT_VARIABLE"
      | "CASH_ADVANCE"
      | "DISCOUNT"
      | "FIXED"
      | "FLOATING"
      | "INTRODUCTORY"
      | "MARKET_LINKED"
      | "PENALTY"
      | "PURCHASE"
      | "VARIABLE";
      /**
       * The rate to be applied
       */
      rate: string;
      /**
       * A comparison rate equivalent for this rate
       */
      comparisonRate?: string | null;
      /**
       * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      calculationFrequency?: string | null;
      /**
       * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      applicationFrequency?: string | null;
      /**
       * When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered
       */
      interestPaymentDue?: ("IN_ADVANCE" | "IN_ARREARS") | null;
      /**
       * Options in place for repayments. If absent, the lending rate is applicable to all repayment types
       */
      repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
      /**
       * The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes
       */
      loanPurpose?: ("INVESTMENT" | "OWNER_OCCUPIED") | null;
      /**
       * Rate tiers applicable for this rate
       */
      tiers?:
      | {
        /**
         * A display name for the tier
         */
        name: string;
        /**
         * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
         */
        unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
        /**
         * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
         */
        minimumValue: number;
        /**
         * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
         */
        maximumValue?: number | null;
        /**
         * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
         */
        rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
        /**
         * Defines a condition for the applicability of a tiered rate
         */
        applicabilityConditions?: {
          /**
           * Display text providing more information on the condition
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this condition
           */
          additionalInfoUri?: string | null;
          [k: string]: unknown;
        };
        /**
         * Display text providing more information on the rate tier.
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this rate tier
         */
        additionalInfoUri?: string | null;
        [k: string]: unknown;
      }[]
      | null;
      /**
       * Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the rate.
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this rate
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Array of features of the account based on the equivalent structure in Product Reference with the following additional field
     */
    features?: ({
      /**
       * The type of feature described
       */
      featureType:
      | "ADDITIONAL_CARDS"
      | "BALANCE_TRANSFERS"
      | "BILL_PAYMENT"
      | "BONUS_REWARDS"
      | "CARD_ACCESS"
      | "CASHBACK_OFFER"
      | "COMPLEMENTARY_PRODUCT_DISCOUNTS"
      | "DIGITAL_BANKING"
      | "DIGITAL_WALLET"
      | "DONATE_INTEREST"
      | "EXTRA_REPAYMENTS"
      | "FRAUD_PROTECTION"
      | "FREE_TXNS"
      | "FREE_TXNS_ALLOWANCE"
      | "GUARANTOR"
      | "INSURANCE"
      | "INSTALMENT_PLAN"
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
      /**
       * Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER
       */
      additionalInfo?: string;
      /**
       * Link to a web page with more information on this feature
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    } & {
      /**
       * True if the feature is already activated and false if the feature is available for activation. Defaults to true if absent. (note this is an additional field appended to the feature object defined in the Product Reference payload)
       */
      isActivated?: boolean | null;
      [k: string]: unknown;
    })[];
    /**
     * Fees and charges applicable to the account based on the equivalent structure in Product Reference
     */
    fees?:
    | {
      /**
       * Name of the fee
       */
      name: string;
      /**
       * The type of fee
       */
      feeType:
      | "DEPOSIT"
      | "EVENT"
      | "EXIT"
      | "PAYMENT"
      | "PERIODIC"
      | "PURCHASE"
      | "TRANSACTION"
      | "UPFRONT"
      | "VARIABLE"
      | "WITHDRAWAL";
      /**
       * The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      amount?: string;
      /**
       * A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.
       */
      balanceRate?: string;
      /**
       * A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      transactionRate?: string;
      /**
       * A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      accruedRate?: string;
      /**
       * The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      accrualFrequency?: string | null;
      /**
       * The currency the fee will be charged in. Assumes AUD if absent
       */
      currency?: string | null;
      /**
       * Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the fee
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this fee
       */
      additionalInfoUri?: string | null;
      /**
       * An optional list of discounts to this fee that may be available
       */
      discounts?:
      | {
        /**
         * Description of the discount
         */
        description: string;
        /**
         * The type of discount. See the next section for an overview of valid values and their meaning
         */
        discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
        /**
         * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
         */
        amount?: string;
        /**
         * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
         */
        balanceRate?: string;
        /**
         * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory
         */
        transactionRate?: string;
        /**
         * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
         */
        accruedRate?: string;
        /**
         * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
         */
        feeRate?: string;
        /**
         * Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)
         */
        additionalValue?: string;
        /**
         * Display text providing more information on the discount
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this discount
         */
        additionalInfoUri?: string | null;
        /**
         * Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.
         */
        eligibility?: {
          /**
           * The type of the specific eligibility constraint for a discount
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
          /**
           * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
           */
          additionalValue?: string;
          /**
           * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
           */
          additionalInfo?: string;
          /**
           * Link to a web page with more information on this eligibility constraint
           */
          additionalInfoUri?: string | null;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[]
      | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * The addresses for the account to be used for correspondence
     */
    addresses?:
    | {
      /**
       * The type of address object present
       */
      addressUType: "paf" | "simple";
      simple?: {
        /**
         * Name of the individual or business formatted for inclusion in an address used for physical mail
         */
        mailingName?: string;
        /**
         * First line of the standard address object
         */
        addressLine1: string;
        /**
         * Second line of the standard address object
         */
        addressLine2?: string;
        /**
         * Third line of the standard address object
         */
        addressLine3?: string;
        /**
         * Mandatory for Australian addresses
         */
        postcode?: string;
        /**
         * Name of the city or locality
         */
        city: string;
        /**
         * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
         */
        state: string;
        /**
         * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
         */
        country?: string;
        [k: string]: unknown;
      };
      /**
       * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
       */
      paf?: {
        /**
         * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
         */
        dpid?: string;
        /**
         * Thoroughfare number for a property (first number in a property ranged address)
         */
        thoroughfareNumber1?: number;
        /**
         * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
         */
        thoroughfareNumber1Suffix?: string;
        /**
         * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
         */
        thoroughfareNumber2?: number;
        /**
         * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
         */
        thoroughfareNumber2Suffix?: string;
        /**
         * Type of flat or unit for the address
         */
        flatUnitType?: string;
        /**
         * Unit number (including suffix, if applicable)
         */
        flatUnitNumber?: string;
        /**
         * Type of floor or level for the address
         */
        floorLevelType?: string;
        /**
         * Floor or level number (including alpha characters)
         */
        floorLevelNumber?: string;
        /**
         * Allotment number for the address
         */
        lotNumber?: string;
        /**
         * Building/Property name 1
         */
        buildingName1?: string;
        /**
         * Building/Property name 2
         */
        buildingName2?: string;
        /**
         * The name of the street
         */
        streetName?: string;
        /**
         * The street type. Valid enumeration defined by Australia Post PAF code file
         */
        streetType?: string;
        /**
         * The street type suffix. Valid enumeration defined by Australia Post PAF code file
         */
        streetSuffix?: string;
        /**
         * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
         */
        postalDeliveryType?: string;
        /**
         * Postal delivery number if the address is a postal delivery type
         */
        postalDeliveryNumber?: number;
        /**
         * Postal delivery number prefix related to the postal delivery number
         */
        postalDeliveryNumberPrefix?: string;
        /**
         * Postal delivery number suffix related to the postal delivery number
         */
        postalDeliveryNumberSuffix?: string;
        /**
         * Full name of locality
         */
        localityName: string;
        /**
         * Postcode for the locality
         */
        postcode: string;
        /**
         * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
         */
        state: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[]
    | null;
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ResponseBankingAccountList {
  data: {
    /**
     * The list of accounts returned. If the filter results in an empty set then this array may have no records
     */
    accounts: {
      /**
       * A unique ID of the account adhering to the standards for ID permanence
       */
      accountId: string;
      /**
       * Date that the account was created (if known)
       */
      creationDate?: string | null;
      /**
       * The display name of the account as defined by the bank. This should not incorporate account numbers or PANs. If it does the values should be masked according to the rules of the MaskedAccountString common type.
       */
      displayName: string;
      /**
       * A customer supplied nick name for the account
       */
      nickname?: string | null;
      /**
       * Open or closed status for the account. If not present then OPEN is assumed
       */
      openStatus?: ("CLOSED" | "OPEN") | null;
      /**
       * Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then 'true' is assumed
       */
      isOwned?: boolean | null;
      /**
       * A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number
       */
      maskedNumber: string;
      /**
       * The category to which a product or account belongs. See [here](#product-categories) for more details
       */
      productCategory:
      | "BUSINESS_LOANS"
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
      /**
       * The unique identifier of the account as defined by the data holder (akin to model number for the account)
       */
      productName: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ResponseBankingAccountsBalanceById {
  data: {
    /**
     * A unique ID of the account adhering to the standards for ID permanence
     */
    accountId: string;
    /**
     * The balance of the account at this time. Should align to the balance available via other channels such as Internet Banking. Assumed to be negative if the customer has money owing
     */
    currentBalance: string;
    /**
     * Balance representing the amount of funds available for transfer. Assumed to be zero or positive
     */
    availableBalance: string;
    /**
     * Object representing the maximum amount of credit that is available for this account. Assumed to be zero if absent
     */
    creditLimit?: string | null;
    /**
     * Object representing the available limit amortised according to payment schedule. Assumed to be zero if absent
     */
    amortisedLimit?: string | null;
    /**
     * The currency for the balance amounts. If absent assumed to be AUD
     */
    currency?: string | null;
    /**
     * Optional array of balances for the account in other currencies. Included to support accounts that support multi-currency purses such as Travel Cards
     */
    purses?:
    | {
      /**
       * The balance available for this additional currency purse
       */
      amount: string;
      /**
       * The currency for the purse
       */
      currency?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta?: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ResponseBankingAccountsBalanceList {
  data: {
    /**
     * The list of balances returned
     */
    balances: {
      /**
       * A unique ID of the account adhering to the standards for ID permanence
       */
      accountId: string;
      /**
       * The balance of the account at this time. Should align to the balance available via other channels such as Internet Banking. Assumed to be negative if the customer has money owing
       */
      currentBalance: string;
      /**
       * Balance representing the amount of funds available for transfer. Assumed to be zero or positive
       */
      availableBalance: string;
      /**
       * Object representing the maximum amount of credit that is available for this account. Assumed to be zero if absent
       */
      creditLimit?: string | null;
      /**
       * Object representing the available limit amortised according to payment schedule. Assumed to be zero if absent
       */
      amortisedLimit?: string | null;
      /**
       * The currency for the balance amounts. If absent assumed to be AUD
       */
      currency?: string | null;
      /**
       * Optional array of balances for the account in other currencies. Included to support accounts that support multi-currency purses such as Travel Cards
       */
      purses?:
      | {
        /**
         * The balance available for this additional currency purse
         */
        amount: string;
        /**
         * The currency for the purse
         */
        currency?: string | null;
        [k: string]: unknown;
      }[]
      | null;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ResponseBankingDirectDebitAuthorisationList {
  data: {
    /**
     * The list of authorisations returned
     */
    directDebitAuthorisations: {
      /**
       * A unique ID of the account adhering to the standards for ID permanence.
       */
      accountId: string;
      authorisedEntity: {
        /**
         * Description of the authorised entity derived from previously executed direct debits
         */
        description?: string | null;
        /**
         * Name of the financial institution through which the direct debit will be executed. Is required unless the payment is made via a credit card scheme
         */
        financialInstitution?: string | null;
        /**
         * Australian Business Number for the authorised entity
         */
        abn?: string | null;
        /**
         * Australian Company Number for the authorised entity
         */
        acn?: string | null;
        /**
         * Australian Registered Body Number for the authorised entity
         */
        arbn?: string | null;
        [k: string]: unknown;
      };
      /**
       * The date and time of the last debit executed under this authorisation
       */
      lastDebitDateTime?: string;
      /**
       * The amount of the last debit executed under this authorisation
       */
      lastDebitAmount?: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ResponseBankingPayeeByIdV2 {
  data: {
    /**
     * ID of the payee adhering to the rules of ID permanence
     */
    payeeId: string;
    /**
     * The short display name of the payee as provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank for the payee consistent with existing digital banking channels
     */
    nickname: string;
    /**
     * A description of the payee provided by the customer
     */
    description?: string;
    /**
     * The type of payee. DOMESTIC means a registered payee for domestic payments including NPP. INTERNATIONAL means a registered payee for international payments. BILLER means a registered payee for BPAY. DIGITAL_WALLET means a registered payee for a bank's digital wallet
     */
    type: ("BILLER" | "DIGITAL_WALLET" | "DOMESTIC" | "INTERNATIONAL") | null;
    /**
     * The date the payee was created by the customer
     */
    creationDate?: string | null;
    [k: string]: unknown;
  } & {
    /**
     * Type of object included that describes the payee in detail
     */
    payeeUType: "biller" | "domestic" | "digitalWallet" | "international";
    domestic?: {
      /**
       * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
       */
      payeeAccountUType: "account" | "card" | "payId";
      account?: {
        /**
         * Name of the account to pay to
         */
        accountName?: string | null;
        /**
         * BSB of the account to pay to
         */
        bsb: string;
        /**
         * Number of the account to pay to
         */
        accountNumber: string;
        [k: string]: unknown;
      };
      card?: {
        /**
         * Name of the account to pay to
         */
        cardNumber: string;
        [k: string]: unknown;
      };
      payId?: {
        /**
         * The name assigned to the PayID by the owner of the PayID
         */
        name?: string | null;
        /**
         * The identifier of the PayID (dependent on type)
         */
        identifier: string;
        /**
         * The type of the PayID
         */
        type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    digitalWallet?: {
      /**
       * The name assigned to the digital wallet by the owner of the wallet, else the display name provided by the digital wallet provider
       */
      name: string;
      /**
       * The identifier of the digital wallet (dependent on type)
       */
      identifier: string;
      /**
       * The type of the digital wallet identifier
       */
      type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
      /**
       * The provider of the digital wallet
       */
      provider: "PAYPAL_AU" | "OTHER";
      [k: string]: unknown;
    };
    biller?: {
      /**
       * BPAY Biller Code of the Biller
       */
      billerCode: string;
      /**
       * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
       */
      crn?: string | null;
      /**
       * Name of the Biller
       */
      billerName: string;
      [k: string]: unknown;
    };
    international?: {
      beneficiaryDetails: {
        /**
         * Name of the beneficiary
         */
        name?: string | null;
        /**
         * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
         */
        country: string;
        /**
         * Response message for the payment
         */
        message?: string | null;
        [k: string]: unknown;
      };
      bankDetails: {
        /**
         * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
         */
        country: string;
        /**
         * Account Targeted for payment
         */
        accountNumber: string;
        bankAddress?: {
          /**
           * Name of the recipient Bank
           */
          name: string;
          /**
           * Address of the recipient Bank
           */
          address: string;
          [k: string]: unknown;
        } | null;
        /**
         * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
         */
        beneficiaryBankBIC?: string | null;
        /**
         * Number for Fedwire payment (Federal Reserve Wire Network)
         */
        fedWireNumber?: string | null;
        /**
         * Sort code used for account identification in some jurisdictions
         */
        sortCode?: string | null;
        /**
         * Number for the Clearing House Interbank Payments System
         */
        chipNumber?: string | null;
        /**
         * International bank routing number
         */
        routingNumber?: string | null;
        /**
         * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
         */
        legalEntityIdentifier?: string | null;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta?: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ResponseBankingPayeeListV2 {
  data: {
    /**
     * The list of payees returned
     */
    payees: {
      /**
       * ID of the payee adhering to the rules of ID permanence
       */
      payeeId: string;
      /**
       * The short display name of the payee as provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank for the payee consistent with existing digital banking channels
       */
      nickname: string;
      /**
       * A description of the payee provided by the customer
       */
      description?: string;
      /**
       * The type of payee. DOMESTIC means a registered payee for domestic payments including NPP. INTERNATIONAL means a registered payee for international payments. BILLER means a registered payee for BPAY. DIGITAL_WALLET means a registered payee for a bank's digital wallet
       */
      type: ("BILLER" | "DIGITAL_WALLET" | "DOMESTIC" | "INTERNATIONAL") | null;
      /**
       * The date the payee was created by the customer
       */
      creationDate?: string | null;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ResponseBankingProductByIdV4 {
  data: {
    /**
     * A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
     */
    productId: string;
    /**
     * The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate
     */
    effectiveFrom?: string | null;
    /**
     * The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products
     */
    effectiveTo?: string | null;
    /**
     * The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)
     */
    lastUpdated: string;
    /**
     * The category to which a product or account belongs. See [here](#product-categories) for more details
     */
    productCategory:
    | "BUSINESS_LOANS"
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
    /**
     * The display name of the product
     */
    name: string;
    /**
     * A description of the product
     */
    description: string;
    /**
     * A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required
     */
    brand: string;
    /**
     * An optional display name of the brand
     */
    brandName?: string | null;
    /**
     * A link to an application web page where this product can be applied for.
     */
    applicationUri?: string | null;
    /**
     * Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable
     */
    isTailored: boolean;
    /**
     * Object that contains links to additional information on specific topics
     */
    additionalInformation?: {
      /**
       * General overview of the product
       */
      overviewUri?: string | null;
      /**
       * Terms and conditions for the product
       */
      termsUri?: string | null;
      /**
       * Eligibility rules and criteria for the product
       */
      eligibilityUri?: string | null;
      /**
       * Description of fees, pricing, discounts, exemptions and bonuses for the product
       */
      feesAndPricingUri?: string | null;
      /**
       * Description of a bundle that this product can be part of
       */
      bundleUri?: string | null;
      [k: string]: unknown;
    } | null;
    /**
     * An array of card art images
     */
    cardArt?:
    | {
      /**
       * Display label for the specific image
       */
      title?: string | null;
      /**
       * URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI [RFC 2397](https://tools.ietf.org/html/rfc2397)
       */
      imageUri: string;
      [k: string]: unknown;
    }[]
    | null;
    [k: string]: unknown;
  } & {
    /**
     * An array of bundles that this product participates in.  Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle.  It is assumed that the current product is included in the bundle also
     */
    bundles?:
    | {
      /**
       * Name of the bundle
       */
      name: string;
      /**
       * Description of the bundle
       */
      description: string;
      /**
       * Display text providing more information on the bundle
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on the bundle criteria and benefits
       */
      additionalInfoUri?: string | null;
      /**
       * Array of product IDs for products included in the bundle that are available via the product end points.  Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference end points
       */
      productIds?: string[] | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Array of features available for the product
     */
    features?:
    | {
      /**
       * The type of feature described
       */
      featureType:
      | "ADDITIONAL_CARDS"
      | "BALANCE_TRANSFERS"
      | "BILL_PAYMENT"
      | "BONUS_REWARDS"
      | "CARD_ACCESS"
      | "CASHBACK_OFFER"
      | "COMPLEMENTARY_PRODUCT_DISCOUNTS"
      | "DIGITAL_BANKING"
      | "DIGITAL_WALLET"
      | "DONATE_INTEREST"
      | "EXTRA_REPAYMENTS"
      | "FRAUD_PROTECTION"
      | "FREE_TXNS"
      | "FREE_TXNS_ALLOWANCE"
      | "GUARANTOR"
      | "INSURANCE"
      | "INSTALMENT_PLAN"
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
      /**
       * Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER
       */
      additionalInfo?: string;
      /**
       * Link to a web page with more information on this feature
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Constraints on the application for or operation of the product such as minimum balances or limit thresholds
     */
    constraints?:
    | {
      /**
       * The type of constraint described.  See the next section for an overview of valid values and their meaning
       */
      constraintType: "MAX_BALANCE" | "MAX_LIMIT" | "MIN_BALANCE" | "MIN_LIMIT" | "OPENING_BALANCE";
      /**
       * Generic field containing additional information relevant to the [constraintType](#tocSproductconstrainttypedoc) specified.  Whether mandatory or not is dependent on the value of [constraintType](#tocSproductconstrainttypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information the constraint
       */
      additionalInfo?: string;
      /**
       * Link to a web page with more information on the constraint
       */
      additionalInfoUri?: string;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Eligibility criteria for the product
     */
    eligibility?:
    | {
      /**
       * The type of eligibility criteria described.  See the next section for an overview of valid values and their meaning
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
      /**
       * Generic field containing additional information relevant to the [eligibilityType](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [eligibilityType](#tocSproducteligibilitytypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to OTHER
       */
      additionalInfo?: string;
      /**
       * Link to a web page with more information on this eligibility criteria
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Fees applicable for the product
     */
    fees?:
    | {
      /**
       * Name of the fee
       */
      name: string;
      /**
       * The type of fee
       */
      feeType:
      | "DEPOSIT"
      | "EVENT"
      | "EXIT"
      | "PAYMENT"
      | "PERIODIC"
      | "PURCHASE"
      | "TRANSACTION"
      | "UPFRONT"
      | "VARIABLE"
      | "WITHDRAWAL";
      /**
       * The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      amount?: string;
      /**
       * A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.
       */
      balanceRate?: string;
      /**
       * A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      transactionRate?: string;
      /**
       * A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      accruedRate?: string;
      /**
       * The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      accrualFrequency?: string | null;
      /**
       * The currency the fee will be charged in. Assumes AUD if absent
       */
      currency?: string | null;
      /**
       * Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the fee
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this fee
       */
      additionalInfoUri?: string | null;
      /**
       * An optional list of discounts to this fee that may be available
       */
      discounts?:
      | {
        /**
         * Description of the discount
         */
        description: string;
        /**
         * The type of discount. See the next section for an overview of valid values and their meaning
         */
        discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
        /**
         * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
         */
        amount?: string;
        /**
         * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
         */
        balanceRate?: string;
        /**
         * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory
         */
        transactionRate?: string;
        /**
         * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
         */
        accruedRate?: string;
        /**
         * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
         */
        feeRate?: string;
        /**
         * Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)
         */
        additionalValue?: string;
        /**
         * Display text providing more information on the discount
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this discount
         */
        additionalInfoUri?: string | null;
        /**
         * Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.
         */
        eligibility?: {
          /**
           * The type of the specific eligibility constraint for a discount
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
          /**
           * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
           */
          additionalValue?: string;
          /**
           * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
           */
          additionalInfo?: string;
          /**
           * Link to a web page with more information on this eligibility constraint
           */
          additionalInfoUri?: string | null;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[]
      | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Interest rates available for deposits
     */
    depositRates?:
    | {
      /**
       * The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning
       */
      depositRateType:
      | "BONUS"
      | "BUNDLE_BONUS"
      | "FIXED"
      | "FLOATING"
      | "INTRODUCTORY"
      | "MARKET_LINKED"
      | "VARIABLE";
      /**
       * The rate to be applied
       */
      rate: string;
      /**
       * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      calculationFrequency?: string | null;
      /**
       * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      applicationFrequency?: string | null;
      /**
       * Rate tiers applicable for this rate
       */
      tiers?:
      | {
        /**
         * A display name for the tier
         */
        name: string;
        /**
         * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
         */
        unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
        /**
         * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
         */
        minimumValue: number;
        /**
         * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
         */
        maximumValue?: number | null;
        /**
         * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
         */
        rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
        /**
         * Defines a condition for the applicability of a tiered rate
         */
        applicabilityConditions?: {
          /**
           * Display text providing more information on the condition
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this condition
           */
          additionalInfoUri?: string | null;
          [k: string]: unknown;
        };
        /**
         * Display text providing more information on the rate tier.
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this rate tier
         */
        additionalInfoUri?: string | null;
        [k: string]: unknown;
      }[]
      | null;
      /**
       * Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the rate
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this rate
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Interest rates charged against lending balances
     */
    lendingRates?:
    | {
      /**
       * The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning
       */
      lendingRateType:
      | "BUNDLE_DISCOUNT_FIXED"
      | "BUNDLE_DISCOUNT_VARIABLE"
      | "CASH_ADVANCE"
      | "DISCOUNT"
      | "FIXED"
      | "FLOATING"
      | "INTRODUCTORY"
      | "MARKET_LINKED"
      | "PENALTY"
      | "PURCHASE"
      | "VARIABLE";
      /**
       * The rate to be applied
       */
      rate: string;
      /**
       * A comparison rate equivalent for this rate
       */
      comparisonRate?: string | null;
      /**
       * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      calculationFrequency?: string | null;
      /**
       * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      applicationFrequency?: string | null;
      /**
       * When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered
       */
      interestPaymentDue?: ("IN_ADVANCE" | "IN_ARREARS") | null;
      /**
       * Options in place for repayments. If absent, the lending rate is applicable to all repayment types
       */
      repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
      /**
       * The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes
       */
      loanPurpose?: ("INVESTMENT" | "OWNER_OCCUPIED") | null;
      /**
       * Rate tiers applicable for this rate
       */
      tiers?:
      | {
        /**
         * A display name for the tier
         */
        name: string;
        /**
         * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
         */
        unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
        /**
         * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
         */
        minimumValue: number;
        /**
         * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
         */
        maximumValue?: number | null;
        /**
         * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
         */
        rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
        /**
         * Defines a condition for the applicability of a tiered rate
         */
        applicabilityConditions?: {
          /**
           * Display text providing more information on the condition
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this condition
           */
          additionalInfoUri?: string | null;
          [k: string]: unknown;
        };
        /**
         * Display text providing more information on the rate tier.
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this rate tier
         */
        additionalInfoUri?: string | null;
        [k: string]: unknown;
      }[]
      | null;
      /**
       * Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the rate.
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this rate
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta?: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
}

export interface ResponseBankingProductListV2 {
  data: {
    /**
     * The list of products returned.  If the filter results in an empty set then this array may have no records
     */
    products: {
      /**
       * A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
       */
      productId: string;
      /**
       * The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate
       */
      effectiveFrom?: string | null;
      /**
       * The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products
       */
      effectiveTo?: string | null;
      /**
       * The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)
       */
      lastUpdated: string;
      /**
       * The category to which a product or account belongs. See [here](#product-categories) for more details
       */
      productCategory:
      | "BUSINESS_LOANS"
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
      /**
       * The display name of the product
       */
      name: string;
      /**
       * A description of the product
       */
      description: string;
      /**
       * A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required
       */
      brand: string;
      /**
       * An optional display name of the brand
       */
      brandName?: string | null;
      /**
       * A link to an application web page where this product can be applied for.
       */
      applicationUri?: string | null;
      /**
       * Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable
       */
      isTailored: boolean;
      /**
       * Object that contains links to additional information on specific topics
       */
      additionalInformation?: {
        /**
         * General overview of the product
         */
        overviewUri?: string | null;
        /**
         * Terms and conditions for the product
         */
        termsUri?: string | null;
        /**
         * Eligibility rules and criteria for the product
         */
        eligibilityUri?: string | null;
        /**
         * Description of fees, pricing, discounts, exemptions and bonuses for the product
         */
        feesAndPricingUri?: string | null;
        /**
         * Description of a bundle that this product can be part of
         */
        bundleUri?: string | null;
        [k: string]: unknown;
      } | null;
      /**
       * An array of card art images
       */
      cardArt?:
      | {
        /**
         * Display label for the specific image
         */
        title?: string | null;
        /**
         * URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI [RFC 2397](https://tools.ietf.org/html/rfc2397)
         */
        imageUri: string;
        [k: string]: unknown;
      }[]
      | null;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}

export interface ResponseBankingProductByIdV4 {
  data: {
    /**
     * A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
     */
    productId: string;
    /**
     * The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate
     */
    effectiveFrom?: string | null;
    /**
     * The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products
     */
    effectiveTo?: string | null;
    /**
     * The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)
     */
    lastUpdated: string;
    /**
     * The category to which a product or account belongs. See [here](#product-categories) for more details
     */
    productCategory:
    | "BUSINESS_LOANS"
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
    /**
     * The display name of the product
     */
    name: string;
    /**
     * A description of the product
     */
    description: string;
    /**
     * A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required
     */
    brand: string;
    /**
     * An optional display name of the brand
     */
    brandName?: string | null;
    /**
     * A link to an application web page where this product can be applied for.
     */
    applicationUri?: string | null;
    /**
     * Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable
     */
    isTailored: boolean;
    /**
     * Object that contains links to additional information on specific topics
     */
    additionalInformation?: {
      /**
       * General overview of the product
       */
      overviewUri?: string | null;
      /**
       * Terms and conditions for the product
       */
      termsUri?: string | null;
      /**
       * Eligibility rules and criteria for the product
       */
      eligibilityUri?: string | null;
      /**
       * Description of fees, pricing, discounts, exemptions and bonuses for the product
       */
      feesAndPricingUri?: string | null;
      /**
       * Description of a bundle that this product can be part of
       */
      bundleUri?: string | null;
      [k: string]: unknown;
    } | null;
    /**
     * An array of card art images
     */
    cardArt?:
    | {
      /**
       * Display label for the specific image
       */
      title?: string | null;
      /**
       * URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI [RFC 2397](https://tools.ietf.org/html/rfc2397)
       */
      imageUri: string;
      [k: string]: unknown;
    }[]
    | null;
    [k: string]: unknown;
  } & {
    /**
     * An array of bundles that this product participates in.  Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle.  It is assumed that the current product is included in the bundle also
     */
    bundles?:
    | {
      /**
       * Name of the bundle
       */
      name: string;
      /**
       * Description of the bundle
       */
      description: string;
      /**
       * Display text providing more information on the bundle
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on the bundle criteria and benefits
       */
      additionalInfoUri?: string | null;
      /**
       * Array of product IDs for products included in the bundle that are available via the product end points.  Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference end points
       */
      productIds?: string[] | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Array of features available for the product
     */
    features?:
    | {
      /**
       * The type of feature described
       */
      featureType:
      | "ADDITIONAL_CARDS"
      | "BALANCE_TRANSFERS"
      | "BILL_PAYMENT"
      | "BONUS_REWARDS"
      | "CARD_ACCESS"
      | "CASHBACK_OFFER"
      | "COMPLEMENTARY_PRODUCT_DISCOUNTS"
      | "DIGITAL_BANKING"
      | "DIGITAL_WALLET"
      | "DONATE_INTEREST"
      | "EXTRA_REPAYMENTS"
      | "FRAUD_PROTECTION"
      | "FREE_TXNS"
      | "FREE_TXNS_ALLOWANCE"
      | "GUARANTOR"
      | "INSURANCE"
      | "INSTALMENT_PLAN"
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
      /**
       * Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER
       */
      additionalInfo?: string;
      /**
       * Link to a web page with more information on this feature
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Constraints on the application for or operation of the product such as minimum balances or limit thresholds
     */
    constraints?:
    | {
      /**
       * The type of constraint described.  See the next section for an overview of valid values and their meaning
       */
      constraintType: "MAX_BALANCE" | "MAX_LIMIT" | "MIN_BALANCE" | "MIN_LIMIT" | "OPENING_BALANCE";
      /**
       * Generic field containing additional information relevant to the [constraintType](#tocSproductconstrainttypedoc) specified.  Whether mandatory or not is dependent on the value of [constraintType](#tocSproductconstrainttypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information the constraint
       */
      additionalInfo?: string;
      /**
       * Link to a web page with more information on the constraint
       */
      additionalInfoUri?: string;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Eligibility criteria for the product
     */
    eligibility?:
    | {
      /**
       * The type of eligibility criteria described.  See the next section for an overview of valid values and their meaning
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
      /**
       * Generic field containing additional information relevant to the [eligibilityType](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [eligibilityType](#tocSproducteligibilitytypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to OTHER
       */
      additionalInfo?: string;
      /**
       * Link to a web page with more information on this eligibility criteria
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Fees applicable for the product
     */
    fees?:
    | {
      /**
       * Name of the fee
       */
      name: string;
      /**
       * The type of fee
       */
      feeType:
      | "DEPOSIT"
      | "EVENT"
      | "EXIT"
      | "PAYMENT"
      | "PERIODIC"
      | "PURCHASE"
      | "TRANSACTION"
      | "UPFRONT"
      | "VARIABLE"
      | "WITHDRAWAL";
      /**
       * The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      amount?: string;
      /**
       * A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.
       */
      balanceRate?: string;
      /**
       * A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      transactionRate?: string;
      /**
       * A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      accruedRate?: string;
      /**
       * The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      accrualFrequency?: string | null;
      /**
       * The currency the fee will be charged in. Assumes AUD if absent
       */
      currency?: string | null;
      /**
       * Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the fee
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this fee
       */
      additionalInfoUri?: string | null;
      /**
       * An optional list of discounts to this fee that may be available
       */
      discounts?:
      | {
        /**
         * Description of the discount
         */
        description: string;
        /**
         * The type of discount. See the next section for an overview of valid values and their meaning
         */
        discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
        /**
         * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
         */
        amount?: string;
        /**
         * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
         */
        balanceRate?: string;
        /**
         * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory
         */
        transactionRate?: string;
        /**
         * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
         */
        accruedRate?: string;
        /**
         * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
         */
        feeRate?: string;
        /**
         * Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)
         */
        additionalValue?: string;
        /**
         * Display text providing more information on the discount
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this discount
         */
        additionalInfoUri?: string | null;
        /**
         * Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.
         */
        eligibility?: {
          /**
           * The type of the specific eligibility constraint for a discount
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
          /**
           * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
           */
          additionalValue?: string;
          /**
           * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
           */
          additionalInfo?: string;
          /**
           * Link to a web page with more information on this eligibility constraint
           */
          additionalInfoUri?: string | null;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[]
      | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Interest rates available for deposits
     */
    depositRates?:
    | {
      /**
       * The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning
       */
      depositRateType:
      | "BONUS"
      | "BUNDLE_BONUS"
      | "FIXED"
      | "FLOATING"
      | "INTRODUCTORY"
      | "MARKET_LINKED"
      | "VARIABLE";
      /**
       * The rate to be applied
       */
      rate: string;
      /**
       * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      calculationFrequency?: string | null;
      /**
       * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      applicationFrequency?: string | null;
      /**
       * Rate tiers applicable for this rate
       */
      tiers?:
      | {
        /**
         * A display name for the tier
         */
        name: string;
        /**
         * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
         */
        unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
        /**
         * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
         */
        minimumValue: number;
        /**
         * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
         */
        maximumValue?: number | null;
        /**
         * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
         */
        rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
        /**
         * Defines a condition for the applicability of a tiered rate
         */
        applicabilityConditions?: {
          /**
           * Display text providing more information on the condition
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this condition
           */
          additionalInfoUri?: string | null;
          [k: string]: unknown;
        };
        /**
         * Display text providing more information on the rate tier.
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this rate tier
         */
        additionalInfoUri?: string | null;
        [k: string]: unknown;
      }[]
      | null;
      /**
       * Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the rate
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this rate
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    /**
     * Interest rates charged against lending balances
     */
    lendingRates?:
    | {
      /**
       * The type of rate (fixed, variable, etc). See the next section for an overview of valid values and their meaning
       */
      lendingRateType:
      | "BUNDLE_DISCOUNT_FIXED"
      | "BUNDLE_DISCOUNT_VARIABLE"
      | "CASH_ADVANCE"
      | "DISCOUNT"
      | "FIXED"
      | "FLOATING"
      | "INTRODUCTORY"
      | "MARKET_LINKED"
      | "PENALTY"
      | "PURCHASE"
      | "VARIABLE";
      /**
       * The rate to be applied
       */
      rate: string;
      /**
       * A comparison rate equivalent for this rate
       */
      comparisonRate?: string | null;
      /**
       * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      calculationFrequency?: string | null;
      /**
       * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      applicationFrequency?: string | null;
      /**
       * When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered
       */
      interestPaymentDue?: ("IN_ADVANCE" | "IN_ARREARS") | null;
      /**
       * Options in place for repayments. If absent, the lending rate is applicable to all repayment types
       */
      repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
      /**
       * The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes
       */
      loanPurpose?: ("INVESTMENT" | "OWNER_OCCUPIED") | null;
      /**
       * Rate tiers applicable for this rate
       */
      tiers?:
      | {
        /**
         * A display name for the tier
         */
        name: string;
        /**
         * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
         */
        unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
        /**
         * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
         */
        minimumValue: number;
        /**
         * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
         */
        maximumValue?: number | null;
        /**
         * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
         */
        rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
        /**
         * Defines a condition for the applicability of a tiered rate
         */
        applicabilityConditions?: {
          /**
           * Display text providing more information on the condition
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this condition
           */
          additionalInfoUri?: string | null;
          [k: string]: unknown;
        };
        /**
         * Display text providing more information on the rate tier.
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this rate tier
         */
        additionalInfoUri?: string | null;
        [k: string]: unknown;
      }[]
      | null;
      /**
       * Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)
       */
      additionalValue?: string;
      /**
       * Display text providing more information on the rate.
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this rate
       */
      additionalInfoUri?: string | null;
      [k: string]: unknown;
    }[]
    | null;
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta?: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}

export interface ResponseBankingScheduledPaymentsList {
  data: {
    /**
     * The list of scheduled payments to return
     */
    scheduledPayments: {
      /**
       * A unique ID of the scheduled payment adhering to the standards for ID permanence
       */
      scheduledPaymentId: string;
      /**
       * The short display name of the scheduled payment as provided by the customer if provided. Where a customer has not provided a nickname, a display name derived by the bank for the scheduled payment should be provided that is consistent with existing digital banking channels
       */
      nickname?: string | null;
      /**
       * The reference for the transaction that will be used by the originating institution for the purposes of constructing a statement narrative on the payer’s account. Empty string if no data provided
       */
      payerReference: string;
      /**
       * The reference for the transaction, if applicable, that will be provided by the originating institution for all payments in the payment set. Empty string if no data provided
       */
      payeeReference?: string;
      /**
       * Indicates whether the schedule is currently active. The value SKIP is equivalent to ACTIVE except that the customer has requested the next normal occurrence to be skipped.
       */
      status: "ACTIVE" | "INACTIVE" | "SKIP";
      /**
       * Object containing details of the source of the payment. Currently only specifies an account ID but provided as an object to facilitate future extensibility and consistency with the to object
       */
      from: {
        /**
         * ID of the account that is the source of funds for the payment
         */
        accountId: string;
        [k: string]: unknown;
      };
      paymentSet: {
        /**
         * Object containing details of the destination of the payment. Used to specify a variety of payment destination types
         */
        to: {
          /**
           * The type of object provided that specifies the destination of the funds for the payment.
           */
          toUType: "accountId" | "biller" | "domestic" | "international" | "payeeId";
          /**
           * Present if toUType is set to accountId. Indicates that the payment is to another account that is accessible under the current consent
           */
          accountId?: string;
          /**
           * Present if toUType is set to payeeId. Indicates that the payment is to registered payee that can be accessed using the payee end point. If the Bank Payees scope has not been consented to then a payeeId should not be provided and the full payee details should be provided instead
           */
          payeeId?: string;
          /**
           * The short display name of the payee as provided by the customer unless toUType is set to payeeId. Where a customer has not provided a nickname, a display name derived by the bank for payee should be provided that is consistent with existing digital banking channels
           */
          nickname?: string;
          /**
           * The reference for the transaction, if applicable, that will be provided by the originating institution for the specific payment. If not empty, it overrides the value provided at the BankingScheduledPayment level.
           */
          payeeReference?: string;
          domestic?: {
            /**
             * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
             */
            payeeAccountUType: "account" | "card" | "payId";
            account?: {
              /**
               * Name of the account to pay to
               */
              accountName?: string | null;
              /**
               * BSB of the account to pay to
               */
              bsb: string;
              /**
               * Number of the account to pay to
               */
              accountNumber: string;
              [k: string]: unknown;
            };
            card?: {
              /**
               * Name of the account to pay to
               */
              cardNumber: string;
              [k: string]: unknown;
            };
            payId?: {
              /**
               * The name assigned to the PayID by the owner of the PayID
               */
              name?: string | null;
              /**
               * The identifier of the PayID (dependent on type)
               */
              identifier: string;
              /**
               * The type of the PayID
               */
              type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          biller?: {
            /**
             * BPAY Biller Code of the Biller
             */
            billerCode: string;
            /**
             * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
             */
            crn?: string | null;
            /**
             * Name of the Biller
             */
            billerName: string;
            [k: string]: unknown;
          };
          international?: {
            beneficiaryDetails: {
              /**
               * Name of the beneficiary
               */
              name?: string | null;
              /**
               * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
               */
              country: string;
              /**
               * Response message for the payment
               */
              message?: string | null;
              [k: string]: unknown;
            };
            bankDetails: {
              /**
               * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
               */
              country: string;
              /**
               * Account Targeted for payment
               */
              accountNumber: string;
              bankAddress?: {
                /**
                 * Name of the recipient Bank
                 */
                name: string;
                /**
                 * Address of the recipient Bank
                 */
                address: string;
                [k: string]: unknown;
              } | null;
              /**
               * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
               */
              beneficiaryBankBIC?: string | null;
              /**
               * Number for Fedwire payment (Federal Reserve Wire Network)
               */
              fedWireNumber?: string | null;
              /**
               * Sort code used for account identification in some jurisdictions
               */
              sortCode?: string | null;
              /**
               * Number for the Clearing House Interbank Payments System
               */
              chipNumber?: string | null;
              /**
               * International bank routing number
               */
              routingNumber?: string | null;
              /**
               * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
               */
              legalEntityIdentifier?: string | null;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        /**
         * Flag indicating whether the amount of the payment is calculated based on the context of the event. For instance a payment to reduce the balance of a credit card to zero. If absent then false is assumed
         */
        isAmountCalculated?: boolean | null;
        /**
         * The amount of the next payment if known. Mandatory unless the isAmountCalculated field is set to true. Must be zero or positive if present
         */
        amount?: string;
        /**
         * The currency for the payment. AUD assumed if not present
         */
        currency?: string | null;
        [k: string]: unknown;
      }[];
      /**
       * Object containing the detail of the schedule for the payment
       */
      recurrence: {
        /**
         * The date of the next payment under the recurrence schedule
         */
        nextPaymentDate?: string | null;
        /**
         * The type of recurrence used to define the schedule
         */
        recurrenceUType: "eventBased" | "intervalSchedule" | "lastWeekDay" | "onceOff";
        /**
         * Indicates that the payment is a once off payment on a specific future date. Mandatory if recurrenceUType is set to onceOff
         */
        onceOff?: {
          /**
           * The scheduled date for the once off payment
           */
          paymentDate: string;
          [k: string]: unknown;
        };
        /**
         * Indicates that the schedule of payments is defined by a series of intervals. Mandatory if recurrenceUType is set to intervalSchedule
         */
        intervalSchedule?: {
          /**
           * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
           */
          finalPaymentDate?: string | null;
          /**
           * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely
           */
          paymentsRemaining?: number | null;
          /**
           * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
           */
          nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
          /**
           * An array of interval objects defining the payment schedule.  Each entry in the array is additive, in that it adds payments to the overall payment schedule.  If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry
           */
          intervals: {
            /**
             * An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)  (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
             */
            interval: string;
            /**
             * Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is P1D. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.
             */
            dayInInterval?: string | null;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        /**
         * Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if recurrenceUType is set to lastWeekDay
         */
        lastWeekDay?: {
          /**
           * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
           */
          finalPaymentDate?: string | null;
          /**
           * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
           */
          paymentsRemaining?: number | null;
          /**
           * The interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
           */
          interval: string;
          /**
           * The weekDay specified. The payment will occur on the last occurrence of this weekday in the interval.
           */
          lastWeekDay: "FRI" | "MON" | "SAT" | "SUN" | "THU" | "TUE" | "WED";
          /**
           * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
           */
          nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
          [k: string]: unknown;
        };
        /**
         * Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if recurrenceUType is set to eventBased
         */
        eventBased?: {
          /**
           * Description of the event and conditions that will result in the payment. Expected to be formatted for display to a customer
           */
          description: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}

export interface ResponseBankingTransactionById {
  data: {
    /**
     * ID of the account for which transactions are provided
     */
    accountId: string;
    /**
     * A unique ID of the transaction adhering to the standards for ID permanence.  This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type. It is mandatory if `isDetailAvailable` is set to true.
     */
    transactionId?: string | null;
    /**
     * True if extended information is available using the transaction detail end point. False if extended data is not available
     */
    isDetailAvailable: boolean;
    /**
     * The type of the transaction
     */
    type:
    | "DIRECT_DEBIT"
    | "FEE"
    | "INTEREST_CHARGED"
    | "INTEREST_PAID"
    | "OTHER"
    | "PAYMENT"
    | "TRANSFER_INCOMING"
    | "TRANSFER_OUTGOING";
    /**
     * Status of the transaction whether pending or posted. Note that there is currently no provision in the standards to guarantee the ability to correlate a pending transaction with an associated posted transaction
     */
    status: "PENDING" | "POSTED";
    /**
     * The transaction description as applied by the financial institution
     */
    description: string;
    /**
     * The time the transaction was posted. This field is Mandatory if the transaction has status POSTED.  This is the time that appears on a standard statement
     */
    postingDateTime?: string;
    /**
     * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry
     */
    valueDateTime?: string | null;
    /**
     * The time the transaction was executed by the originating customer, if available
     */
    executionDateTime?: string | null;
    /**
     * The value of the transaction. Negative values mean money was outgoing from the account
     */
    amount: string;
    /**
     * The currency for the transaction amount. AUD assumed if not present
     */
    currency?: string | null;
    /**
     * The reference for the transaction provided by the originating institution. Empty string if no data provided
     */
    reference: string;
    /**
     * Name of the merchant for an outgoing payment to a merchant
     */
    merchantName?: string | null;
    /**
     * The merchant category code (or MCC) for an outgoing payment to a merchant
     */
    merchantCategoryCode?: string | null;
    /**
     * BPAY Biller Code for the transaction (if available)
     */
    billerCode?: string | null;
    /**
     * Name of the BPAY biller for the transaction (if available)
     */
    billerName?: string;
    /**
     * BPAY CRN for the transaction (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
     */
    crn?: string | null;
    /**
     * 6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.
     */
    apcaNumber?: string;
    [k: string]: unknown;
  } & {
    extendedData: {
      /**
       * Label of the originating payer. Mandatory for inbound payment
       */
      payer?: string | null;
      /**
       * Label of the target PayID.  Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID)
       */
      payee?: string | null;
      /**
       * Optional extended data provided specific to transaction originated via NPP
       */
      extensionUType?: "x2p101Payload" | null;
      x2p101Payload?: {
        /**
         * An extended string description. Only present if specified by the extensionUType field
         */
        extendedDescription: string;
        /**
         * An end to end ID for the payment created at initiation
         */
        endToEndId?: string | null;
        /**
         * Purpose of the payment.  Format is defined by NPP standards for the x2p1.01 overlay service
         */
        purposeCode?: string | null;
        [k: string]: unknown;
      } | null;
      /**
       * Identifier of the applicable overlay service. Valid values are: X2P1.01
       */
      service: "X2P1.01";
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta?: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}

export interface ResponseBankingTransactionList {
  data: {
    transactions: {
      /**
       * ID of the account for which transactions are provided
       */
      accountId: string;
      /**
       * A unique ID of the transaction adhering to the standards for ID permanence.  This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type. It is mandatory if `isDetailAvailable` is set to true.
       */
      transactionId?: string | null;
      /**
       * True if extended information is available using the transaction detail end point. False if extended data is not available
       */
      isDetailAvailable: boolean;
      /**
       * The type of the transaction
       */
      type:
      | "DIRECT_DEBIT"
      | "FEE"
      | "INTEREST_CHARGED"
      | "INTEREST_PAID"
      | "OTHER"
      | "PAYMENT"
      | "TRANSFER_INCOMING"
      | "TRANSFER_OUTGOING";
      /**
       * Status of the transaction whether pending or posted. Note that there is currently no provision in the standards to guarantee the ability to correlate a pending transaction with an associated posted transaction
       */
      status: "PENDING" | "POSTED";
      /**
       * The transaction description as applied by the financial institution
       */
      description: string;
      /**
       * The time the transaction was posted. This field is Mandatory if the transaction has status POSTED.  This is the time that appears on a standard statement
       */
      postingDateTime?: string;
      /**
       * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry
       */
      valueDateTime?: string | null;
      /**
       * The time the transaction was executed by the originating customer, if available
       */
      executionDateTime?: string | null;
      /**
       * The value of the transaction. Negative values mean money was outgoing from the account
       */
      amount: string;
      /**
       * The currency for the transaction amount. AUD assumed if not present
       */
      currency?: string | null;
      /**
       * The reference for the transaction provided by the originating institution. Empty string if no data provided
       */
      reference: string;
      /**
       * Name of the merchant for an outgoing payment to a merchant
       */
      merchantName?: string | null;
      /**
       * The merchant category code (or MCC) for an outgoing payment to a merchant
       */
      merchantCategoryCode?: string | null;
      /**
       * BPAY Biller Code for the transaction (if available)
       */
      billerCode?: string | null;
      /**
       * Name of the BPAY biller for the transaction (if available)
       */
      billerName?: string;
      /**
       * BPAY CRN for the transaction (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
       */
      crn?: string | null;
      /**
       * 6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.
       */
      apcaNumber?: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
