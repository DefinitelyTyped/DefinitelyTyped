/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
   * Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then 'true' is assumed
   */
  isOwned?: boolean | null;
  /**
   * A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number
   */
  maskedNumber: string;
  /**
   * A customer supplied nick name for the account
   */
  nickname?: string | null;
  /**
   * Open or closed status for the account. If not present then OPEN is assumed
   */
  openStatus?: ("CLOSED" | "OPEN") | null;
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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingAccountDetailV2 extends BankingAccount {
  /**
   * The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces
   */
  bsb?: string;
  /**
   * The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces
   */
  accountNumber?: string;
  /**
   * Optional field to indicate if this account is part of a bundle that is providing additional benefit for to the customer
   */
  bundleName?: string;
  /**
   * The type of structure to present account specific fields.
   */
  specificAccountUType?: "creditCard" | "loan" | "termDeposit";
  termDeposit?: {
    /**
     * The lodgement date of the original deposit
     */
    lodgementDate: string;
    /**
     * Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated
     */
    maturityAmount?: string | null;
    /**
     * If absent assumes AUD
     */
    maturityCurrency?: string | null;
    /**
     * Maturity date for the term deposit
     */
    maturityDate: string;
    /**
     * Current instructions on action to be taken at maturity. This includes default actions that may be specified in the terms and conditions for the product e.g. roll-over to the same term and frequency of interest payments
     */
    maturityInstructions: "HOLD_ON_MATURITY" | "PAID_OUT_AT_MATURITY" | "ROLLED_OVER";
    [k: string]: unknown;
  }[];
  creditCard?: {
    /**
     * The minimum payment amount due for the next card payment
     */
    minPaymentAmount: string;
    /**
     * If absent assumes AUD
     */
    paymentCurrency?: string | null;
    /**
     * The amount due for the next card payment
     */
    paymentDueAmount: string;
    /**
     * Date that the next payment for the card is due
     */
    paymentDueDate: string;
    [k: string]: unknown;
  };
  loan?: {
    /**
     * Date that the loan is due to be repaid in full
     */
    loanEndDate?: string | null;
    /**
     * Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account
     */
    maxRedraw?: string | null;
    /**
     * If absent assumes AUD
     */
    maxRedrawCurrency?: string | null;
    /**
     * Minimum amount of next instalment
     */
    minInstalmentAmount?: string | null;
    /**
     * If absent assumes AUD
     */
    minInstalmentCurrency?: string | null;
    /**
     * Minimum redraw amount
     */
    minRedraw?: string | null;
    /**
     * If absent assumes AUD
     */
    minRedrawCurrency?: string | null;
    /**
     * Next date that an instalment is required
     */
    nextInstalmentDate?: string | null;
    /**
     * Set to true if one or more offset accounts are configured for this loan account
     */
    offsetAccountEnabled?: boolean | null;
    /**
     * The accountIDs of the configured offset accounts attached to this loan. Only offset accounts that can be accessed under the current authorisation should be included. It is expected behaviour that offsetAccountEnabled is set to true but the offsetAccountIds field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation
     */
    offsetAccountIds?: string[] | null;
    /**
     * Optional original loan value
     */
    originalLoanAmount?: string | null;
    /**
     * If absent assumes AUD
     */
    originalLoanCurrency?: string | null;
    /**
     * Optional original start date for the loan
     */
    originalStartDate?: string | null;
    /**
     * The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    repaymentFrequency?: string | null;
    /**
     * Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST
     */
    repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
    [k: string]: unknown;
  };
  /**
   * current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call
   */
  depositRate?: string;
  /**
   * The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call
   */
  lendingRate?: string;
  /**
   * Fully described deposit rates for this account based on the equivalent structure in Product Reference
   */
  depositRates?: {
    /**
     * Display text providing more information on the rate
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)
     */
    additionalValue?: string | null;
    /**
     * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    applicationFrequency?: string | null;
    /**
     * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    calculationFrequency?: string | null;
    /**
     * The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning
     */
    depositRateType: "BONUS" | "BUNDLE_BONUS" | "FIXED" | "FLOATING" | "INTRODUCTORY" | "MARKET_LINKED" | "VARIABLE";
    /**
     * The rate to be applied
     */
    rate: string;
    /**
     * Rate tiers applicable for this rate
     */
    tiers?:
      | {
          /**
           * Display text providing more information on the rate tier.
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this rate tier
           */
          additionalInfoUri?: string | null;
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
           * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
           */
          maximumValue?: number | null;
          /**
           * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
           */
          minimumValue: number;
          /**
           * A display name for the tier
           */
          name: string;
          /**
           * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
           */
          rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
          /**
           * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
           */
          unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
          [k: string]: unknown;
        }[]
      | null;
    [k: string]: unknown;
  }[];
  /**
   * Fully described deposit rates for this account based on the equivalent structure in Product Reference
   */
  lendingRates?: {
    /**
     * Display text providing more information on the rate.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)
     */
    additionalValue?: string | null;
    /**
     * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    applicationFrequency?: string | null;
    /**
     * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    calculationFrequency?: string | null;
    /**
     * A comparison rate equivalent for this rate
     */
    comparisonRate?: string | null;
    /**
     * When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered
     */
    interestPaymentDue?: ("IN_ADVANCE" | "IN_ARREARS") | null;
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
     * The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes
     */
    loanPurpose?: ("INVESTMENT" | "OWNER_OCCUPIED") | null;
    /**
     * The rate to be applied
     */
    rate: string;
    /**
     * Options in place for repayments. If absent, the lending rate is applicable to all repayment types
     */
    repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
    /**
     * Rate tiers applicable for this rate
     */
    tiers?:
      | {
          /**
           * Display text providing more information on the rate tier.
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this rate tier
           */
          additionalInfoUri?: string | null;
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
           * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
           */
          maximumValue?: number | null;
          /**
           * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
           */
          minimumValue: number;
          /**
           * A display name for the tier
           */
          name: string;
          /**
           * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
           */
          rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
          /**
           * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
           */
          unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
          [k: string]: unknown;
        }[]
      | null;
    [k: string]: unknown;
  }[];
  /**
   * Array of features of the account based on the equivalent structure in Product Reference with the following additional field
   */
  features?: ({
    /**
     * Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this feature
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)
     */
    additionalValue?: string | null;
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
    [k: string]: unknown;
  } & {
    /**
     * True if the feature is already activated and false if the feature is available for activation. Defaults to true if absent. (note this is an additional field appended to the feature object defined in the Product Reference payload)
     */
    isActivated?: boolean;
    [k: string]: unknown;
  })[];
  /**
   * Fees and charges applicable to the account based on the equivalent structure in Product Reference
   */
  fees?: {
    /**
     * The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    accrualFrequency?: string | null;
    /**
     * A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
     */
    accruedRate?: string | null;
    /**
     * Display text providing more information on the fee
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this fee
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)
     */
    additionalValue?: string | null;
    /**
     * The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
     */
    amount?: string | null;
    /**
     * A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.
     */
    balanceRate?: string | null;
    /**
     * The currency the fee will be charged in. Assumes AUD if absent
     */
    currency?: string | null;
    /**
     * An optional list of discounts to this fee that may be available
     */
    discounts?:
      | {
          /**
           * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
           */
          accruedRate?: string | null;
          /**
           * Display text providing more information on the discount
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this discount
           */
          additionalInfoUri?: string | null;
          /**
           * Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)
           */
          additionalValue?: string | null;
          /**
           * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
           */
          amount?: string | null;
          /**
           * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
           */
          balanceRate?: string | null;
          /**
           * Description of the discount
           */
          description: string;
          /**
           * The type of discount. See the next section for an overview of valid values and their meaning
           */
          discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
          /**
           * Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.
           */
          eligibility?:
            | {
                /**
                 * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
                 */
                additionalInfo?: string | null;
                /**
                 * Link to a web page with more information on this eligibility constraint
                 */
                additionalInfoUri?: string | null;
                /**
                 * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
                 */
                additionalValue?: string | null;
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
                [k: string]: unknown;
              }[]
            | null;
          /**
           * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
           */
          feeRate?: string | null;
          /**
           * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory
           */
          transactionRate?: string | null;
          [k: string]: unknown;
        }[]
      | null;
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
     * Name of the fee
     */
    name: string;
    /**
     * A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
     */
    transactionRate?: string | null;
    [k: string]: unknown;
  }[];
  /**
   * The addresses for the account to be used for correspondence
   */
  addresses?: {
    /**
     * The type of address object present
     */
    addressUType: "paf" | "simple";
    /**
     * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
     */
    paf?: {
      /**
       * Building/Property name 1
       */
      buildingName1?: string | null;
      /**
       * Building/Property name 2
       */
      buildingName2?: string | null;
      /**
       * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
       */
      dpid?: string | null;
      /**
       * Unit number (including suffix, if applicable)
       */
      flatUnitNumber?: string | null;
      /**
       * Type of flat or unit for the address
       */
      flatUnitType?: string | null;
      /**
       * Floor or level number (including alpha characters)
       */
      floorLevelNumber?: string | null;
      /**
       * Type of floor or level for the address
       */
      floorLevelType?: string | null;
      /**
       * Full name of locality
       */
      localityName: string;
      /**
       * Allotment number for the address
       */
      lotNumber?: string | null;
      /**
       * Postal delivery number if the address is a postal delivery type
       */
      postalDeliveryNumber?: number | null;
      /**
       * Postal delivery number prefix related to the postal delivery number
       */
      postalDeliveryNumberPrefix?: string | null;
      /**
       * Postal delivery number suffix related to the postal delivery number
       */
      postalDeliveryNumberSuffix?: string | null;
      /**
       * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
       */
      postalDeliveryType?: string | null;
      /**
       * Postcode for the locality
       */
      postcode: string;
      /**
       * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
       */
      state: string;
      /**
       * The name of the street
       */
      streetName?: string | null;
      /**
       * The street type suffix. Valid enumeration defined by Australia Post PAF code file
       */
      streetSuffix?: string | null;
      /**
       * The street type. Valid enumeration defined by Australia Post PAF code file
       */
      streetType?: string | null;
      /**
       * Thoroughfare number for a property (first number in a property ranged address)
       */
      thoroughfareNumber1?: number | null;
      /**
       * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
       */
      thoroughfareNumber1Suffix?: string | null;
      /**
       * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
       */
      thoroughfareNumber2?: number | null;
      /**
       * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
       */
      thoroughfareNumber2Suffix?: string | null;
      [k: string]: unknown;
    };
    simple?: {
      /**
       * First line of the standard address object
       */
      addressLine1: string;
      /**
       * Second line of the standard address object
       */
      addressLine2?: string | null;
      /**
       * Third line of the standard address object
       */
      addressLine3?: string | null;
      /**
       * Name of the city or locality
       */
      city: string;
      /**
       * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
       */
      country?: string | null;
      /**
       * Name of the individual or business formatted for inclusion in an address used for physical mail
       */
      mailingName?: string | null;
      /**
       * Mandatory for Australian addresses
       */
      postcode?: string | null;
      /**
       * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
       */
      state: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingAuthorisedEntity {
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
  /**
   * Description of the authorised entity derived from previously executed direct debits
   */
  description?: string | null;
  /**
   * Name of the financial institution through which the direct debit will be executed. Is required unless the payment is made via a credit card scheme
   */
  financialInstitution?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingBalance {
  /**
   * A unique ID of the account adhering to the standards for ID permanence
   */
  accountId: string;
  /**
   * Object representing the available limit amortised according to payment schedule. Assumed to be zero if absent
   */
  amortisedLimit?: string | null;
  /**
   * Balance representing the amount of funds available for transfer. Assumed to be zero or positive
   */
  availableBalance: string;
  /**
   * Object representing the maximum amount of credit that is available for this account. Assumed to be zero if absent
   */
  creditLimit?: string | null;
  /**
   * The currency for the balance amounts. If absent assumed to be AUD
   */
  currency?: string | null;
  /**
   * The balance of the account at this time. Should align to the balance available via other channels such as Internet Banking. Assumed to be negative if the customer has money owing
   */
  currentBalance: string;
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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingBillerPayee {
  /**
   * BPAY Biller Code of the Biller
   */
  billerCode: string;
  /**
   * Name of the Biller
   */
  billerName: string;
  /**
   * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
   */
  crn?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingCreditCardAccount {
  /**
   * The minimum payment amount due for the next card payment
   */
  minPaymentAmount: string;
  /**
   * If absent assumes AUD
   */
  paymentCurrency?: string | null;
  /**
   * The amount due for the next card payment
   */
  paymentDueAmount: string;
  /**
   * Date that the next payment for the card is due
   */
  paymentDueDate: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDigitalWalletPayee {
  /**
   * The identifier of the digital wallet (dependent on type)
   */
  identifier: string;
  /**
   * The name assigned to the digital wallet by the owner of the wallet, else the display name provided by the digital wallet provider
   */
  name: string;
  /**
   * The provider of the digital wallet
   */
  provider: "PAYPAL_AU" | "OTHER";
  /**
   * The type of the digital wallet identifier
   */
  type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDirectDebit {
  /**
   * A unique ID of the account adhering to the standards for ID permanence.
   */
  accountId: string;
  authorisedEntity: {
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
    /**
     * Description of the authorised entity derived from previously executed direct debits
     */
    description?: string | null;
    /**
     * Name of the financial institution through which the direct debit will be executed. Is required unless the payment is made via a credit card scheme
     */
    financialInstitution?: string | null;
    [k: string]: unknown;
  };
  /**
   * The amount of the last debit executed under this authorisation
   */
  lastDebitAmount?: string | null;
  /**
   * The date and time of the last debit executed under this authorisation
   */
  lastDebitDateTime?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayee {
  account?: {
    /**
     * Name of the account to pay to
     */
    accountName?: string | null;
    /**
     * Number of the account to pay to
     */
    accountNumber: string;
    /**
     * BSB of the account to pay to
     */
    bsb: string;
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
     * The identifier of the PayID (dependent on type)
     */
    identifier: string;
    /**
     * The name assigned to the PayID by the owner of the PayID
     */
    name?: string | null;
    /**
     * The type of the PayID
     */
    type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
    [k: string]: unknown;
  };
  /**
   * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
   */
  payeeAccountUType: "account" | "card" | "payId";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayeeAccount {
  /**
   * Name of the account to pay to
   */
  accountName?: string | null;
  /**
   * Number of the account to pay to
   */
  accountNumber: string;
  /**
   * BSB of the account to pay to
   */
  bsb: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayeeCard {
  /**
   * Name of the account to pay to
   */
  cardNumber: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayeePayId {
  /**
   * The identifier of the PayID (dependent on type)
   */
  identifier: string;
  /**
   * The name assigned to the PayID by the owner of the PayID
   */
  name?: string | null;
  /**
   * The type of the PayID
   */
  type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingInternationalPayee {
  bankDetails: {
    /**
     * Account Targeted for payment
     */
    accountNumber: string;
    bankAddress?: {
      /**
       * Address of the recipient Bank
       */
      address: string;
      /**
       * Name of the recipient Bank
       */
      name: string;
      [k: string]: unknown;
    } | null;
    /**
     * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
     */
    beneficiaryBankBIC?: string | null;
    /**
     * Number for the Clearing House Interbank Payments System
     */
    chipNumber?: string | null;
    /**
     * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
     */
    country: string;
    /**
     * Number for Fedwire payment (Federal Reserve Wire Network)
     */
    fedWireNumber?: string | null;
    /**
     * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
     */
    legalEntityIdentifier?: string | null;
    /**
     * International bank routing number
     */
    routingNumber?: string | null;
    /**
     * Sort code used for account identification in some jurisdictions
     */
    sortCode?: string | null;
    [k: string]: unknown;
  };
  beneficiaryDetails: {
    /**
     * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
     */
    country: string;
    /**
     * Response message for the payment
     */
    message?: string | null;
    /**
     * Name of the beneficiary
     */
    name?: string | null;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingLoanAccountV2 {
  /**
   * Date that the loan is due to be repaid in full
   */
  loanEndDate?: string | null;
  /**
   * Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account
   */
  maxRedraw?: string | null;
  /**
   * If absent assumes AUD
   */
  maxRedrawCurrency?: string | null;
  /**
   * Minimum amount of next instalment
   */
  minInstalmentAmount?: string | null;
  /**
   * If absent assumes AUD
   */
  minInstalmentCurrency?: string | null;
  /**
   * Minimum redraw amount
   */
  minRedraw?: string | null;
  /**
   * If absent assumes AUD
   */
  minRedrawCurrency?: string | null;
  /**
   * Next date that an instalment is required
   */
  nextInstalmentDate?: string | null;
  /**
   * Set to true if one or more offset accounts are configured for this loan account
   */
  offsetAccountEnabled?: boolean | null;
  /**
   * The accountIDs of the configured offset accounts attached to this loan. Only offset accounts that can be accessed under the current authorisation should be included. It is expected behaviour that offsetAccountEnabled is set to true but the offsetAccountIds field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation
   */
  offsetAccountIds?: string[] | null;
  /**
   * Optional original loan value
   */
  originalLoanAmount?: string | null;
  /**
   * If absent assumes AUD
   */
  originalLoanCurrency?: string | null;
  /**
   * Optional original start date for the loan
   */
  originalStartDate?: string | null;
  /**
   * The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
   */
  repaymentFrequency?: string | null;
  /**
   * Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST
   */
  repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingPayeeDetailV2 extends BankingPayeeV2 {
  /**
   * Type of object included that describes the payee in detail
   */
  payeeUType: "biller" | "digitalWallet" | "domestic" | "international";
  biller?: {
    /**
     * BPAY Biller Code of the Biller
     */
    billerCode: string;
    /**
     * Name of the Biller
     */
    billerName: string;
    /**
     * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
     */
    crn?: string | null;
    [k: string]: unknown;
  };
  domestic?: {
    account?: {
      /**
       * Name of the account to pay to
       */
      accountName?: string | null;
      /**
       * Number of the account to pay to
       */
      accountNumber: string;
      /**
       * BSB of the account to pay to
       */
      bsb: string;
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
       * The identifier of the PayID (dependent on type)
       */
      identifier: string;
      /**
       * The name assigned to the PayID by the owner of the PayID
       */
      name?: string | null;
      /**
       * The type of the PayID
       */
      type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
      [k: string]: unknown;
    };
    /**
     * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
     */
    payeeAccountUType: "account" | "card" | "payId";
    [k: string]: unknown;
  };
  digitalWallet?: {
    /**
     * The identifier of the digital wallet (dependent on type)
     */
    identifier: string;
    /**
     * The name assigned to the digital wallet by the owner of the wallet, else the display name provided by the digital wallet provider
     */
    name: string;
    /**
     * The provider of the digital wallet
     */
    provider: "PAYPAL_AU" | "OTHER";
    /**
     * The type of the digital wallet identifier
     */
    type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
    [k: string]: unknown;
  };
  international?: {
    bankDetails: {
      /**
       * Account Targeted for payment
       */
      accountNumber: string;
      bankAddress?: {
        /**
         * Address of the recipient Bank
         */
        address: string;
        /**
         * Name of the recipient Bank
         */
        name: string;
        [k: string]: unknown;
      } | null;
      /**
       * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
       */
      beneficiaryBankBIC?: string | null;
      /**
       * Number for the Clearing House Interbank Payments System
       */
      chipNumber?: string | null;
      /**
       * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
       */
      country: string;
      /**
       * Number for Fedwire payment (Federal Reserve Wire Network)
       */
      fedWireNumber?: string | null;
      /**
       * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
       */
      legalEntityIdentifier?: string | null;
      /**
       * International bank routing number
       */
      routingNumber?: string | null;
      /**
       * Sort code used for account identification in some jurisdictions
       */
      sortCode?: string | null;
      [k: string]: unknown;
    };
    beneficiaryDetails: {
      /**
       * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
       */
      country: string;
      /**
       * Response message for the payment
       */
      message?: string | null;
      /**
       * Name of the beneficiary
       */
      name?: string | null;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingPayeeV2 {
  /**
   * The date the payee was created by the customer
   */
  creationDate?: string | null;
  /**
   * A description of the payee provided by the customer
   */
  description?: string | null;
  /**
   * The short display name of the payee as provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank for the payee consistent with existing digital banking channels
   */
  nickname: string;
  /**
   * ID of the payee adhering to the rules of ID permanence
   */
  payeeId: string;
  /**
   * The type of payee.<br/>DOMESTIC means a registered payee for domestic payments including NPP. <br/>INTERNATIONAL means a registered payee for international payments. <br/>BILLER means a registered payee for BPAY. <br/>DIGITAL_WALLET means a registered payee for a bank's digital wallet
   */
  type: "BILLER" | "DIGITAL_WALLET" | "DOMESTIC" | "INTERNATIONAL";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Object that contains links to additional information on specific topics
 */
export interface BankingProductAdditionalInformationV2 {
  /**
   * An array of additional bundles for the product, if applicable. To be treated as secondary documents to the `bundleUri`. Only to be used if there is a primary `bundleUri`.
   */
  additionalBundleUris?:
    | {
        /**
         * The URI describing the additional information
         */
        additionalInfoUri: string;
        /**
         * Display text providing more information about the document URI
         */
        description?: string | null;
        [k: string]: unknown;
      }[]
    | null;
  /**
   * An array of additional eligibility rules and criteria for the product, if applicable. To be treated as secondary documents to the `eligibilityUri`. Only to be used if there is a primary `eligibilityUri`.
   */
  additionalEligibilityUris?:
    | {
        /**
         * The URI describing the additional information
         */
        additionalInfoUri: string;
        /**
         * Display text providing more information about the document URI
         */
        description?: string | null;
        [k: string]: unknown;
      }[]
    | null;
  /**
   * An array of additional fees, pricing, discounts, exemptions and bonuses for the product, if applicable. To be treated as secondary documents to the `feesAndPricingUri`. Only to be used if there is a primary `feesAndPricingUri`.
   */
  additionalFeesAndPricingUris?:
    | {
        /**
         * The URI describing the additional information
         */
        additionalInfoUri: string;
        /**
         * Display text providing more information about the document URI
         */
        description?: string | null;
        [k: string]: unknown;
      }[]
    | null;
  /**
   * An array of additional general overviews for the product or features of the product, if applicable. To be treated as secondary documents to the `overviewUri`. Only to be used if there is a primary `overviewUri`.
   */
  additionalOverviewUris?:
    | {
        /**
         * The URI describing the additional information
         */
        additionalInfoUri: string;
        /**
         * Display text providing more information about the document URI
         */
        description?: string | null;
        [k: string]: unknown;
      }[]
    | null;
  /**
   * An array of additional terms and conditions for the product, if applicable. To be treated as secondary documents to the `termsUri`. Only to be used if there is a primary `termsUri`.
   */
  additionalTermsUris?:
    | {
        /**
         * The URI describing the additional information
         */
        additionalInfoUri: string;
        /**
         * Display text providing more information about the document URI
         */
        description?: string | null;
        [k: string]: unknown;
      }[]
    | null;
  /**
   * Description of a bundle that this product can be part of. Mandatory if `additionalBundleUris` includes one or more supporting documents.
   */
  bundleUri?: string | null;
  /**
   * Eligibility rules and criteria for the product. Mandatory if `additionalEligibilityUris` includes one or more supporting documents.
   */
  eligibilityUri?: string | null;
  /**
   * Description of fees, pricing, discounts, exemptions and bonuses for the product. Mandatory if `additionalFeesAndPricingUris` includes one or more supporting documents.
   */
  feesAndPricingUri?: string | null;
  /**
   * General overview of the product. Mandatory if `additionalOverviewUris` includes one or more supporting documents.
   */
  overviewUri?: string | null;
  /**
   * Terms and conditions for the product. Mandatory if `additionalTermsUris` includes one or more supporting documents.
   */
  termsUri?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductAdditionalInformationV2AdditionalInformationUris {
  /**
   * The URI describing the additional information
   */
  additionalInfoUri: string;
  /**
   * Display text providing more information about the document URI
   */
  description?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductBundle {
  /**
   * Display text providing more information on the bundle
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on the bundle criteria and benefits
   */
  additionalInfoUri?: string | null;
  /**
   * Description of the bundle
   */
  description: string;
  /**
   * Name of the bundle
   */
  name: string;
  /**
   * Array of product IDs for products included in the bundle that are available via the product end points.  Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference end points
   */
  productIds?: string[] | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductConstraint {
  /**
   * Display text providing more information the constraint
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on the constraint
   */
  additionalInfoUri?: string | null;
  /**
   * Generic field containing additional information relevant to the [constraintType](#tocSproductconstrainttypedoc) specified.  Whether mandatory or not is dependent on the value of [constraintType](#tocSproductconstrainttypedoc)
   */
  additionalValue?: string | null;
  /**
   * The type of constraint described.  See the next section for an overview of valid values and their meaning
   */
  constraintType: "MAX_BALANCE" | "MAX_LIMIT" | "MIN_BALANCE" | "MIN_LIMIT" | "OPENING_BALANCE";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductDepositRate {
  /**
   * Display text providing more information on the rate
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this rate
   */
  additionalInfoUri?: string | null;
  /**
   * Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)
   */
  additionalValue?: string | null;
  /**
   * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
   */
  applicationFrequency?: string | null;
  /**
   * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
   */
  calculationFrequency?: string | null;
  /**
   * The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning
   */
  depositRateType: "BONUS" | "BUNDLE_BONUS" | "FIXED" | "FLOATING" | "INTRODUCTORY" | "MARKET_LINKED" | "VARIABLE";
  /**
   * The rate to be applied
   */
  rate: string;
  /**
   * Rate tiers applicable for this rate
   */
  tiers?:
    | {
        /**
         * Display text providing more information on the rate tier.
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this rate tier
         */
        additionalInfoUri?: string | null;
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
         * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
         */
        maximumValue?: number | null;
        /**
         * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
         */
        minimumValue: number;
        /**
         * A display name for the tier
         */
        name: string;
        /**
         * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
         */
        rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
        /**
         * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
         */
        unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
        [k: string]: unknown;
      }[]
    | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductDetailV4 extends BankingProductV4 {
  /**
   * An array of bundles that this product participates in.  Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle.  It is assumed that the current product is included in the bundle also
   */
  bundles?: {
    /**
     * Display text providing more information on the bundle
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on the bundle criteria and benefits
     */
    additionalInfoUri?: string | null;
    /**
     * Description of the bundle
     */
    description: string;
    /**
     * Name of the bundle
     */
    name: string;
    /**
     * Array of product IDs for products included in the bundle that are available via the product end points.  Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference end points
     */
    productIds?: string[] | null;
    [k: string]: unknown;
  }[];
  /**
   * Array of features available for the product
   */
  features?: {
    /**
     * Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this feature
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)
     */
    additionalValue?: string | null;
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
    [k: string]: unknown;
  }[];
  /**
   * Constraints on the application for or operation of the product such as minimum balances or limit thresholds
   */
  constraints?: {
    /**
     * Display text providing more information the constraint
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on the constraint
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [constraintType](#tocSproductconstrainttypedoc) specified.  Whether mandatory or not is dependent on the value of [constraintType](#tocSproductconstrainttypedoc)
     */
    additionalValue?: string | null;
    /**
     * The type of constraint described.  See the next section for an overview of valid values and their meaning
     */
    constraintType: "MAX_BALANCE" | "MAX_LIMIT" | "MIN_BALANCE" | "MIN_LIMIT" | "OPENING_BALANCE";
    [k: string]: unknown;
  }[];
  /**
   * Eligibility criteria for the product
   */
  eligibility?: {
    /**
     * Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to OTHER
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this eligibility criteria
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [eligibilityType](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [eligibilityType](#tocSproducteligibilitytypedoc)
     */
    additionalValue?: string | null;
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
    [k: string]: unknown;
  }[];
  /**
   * Fees applicable for the product
   */
  fees?: {
    /**
     * The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    accrualFrequency?: string | null;
    /**
     * A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
     */
    accruedRate?: string | null;
    /**
     * Display text providing more information on the fee
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this fee
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)
     */
    additionalValue?: string | null;
    /**
     * The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
     */
    amount?: string | null;
    /**
     * A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.
     */
    balanceRate?: string | null;
    /**
     * The currency the fee will be charged in. Assumes AUD if absent
     */
    currency?: string | null;
    /**
     * An optional list of discounts to this fee that may be available
     */
    discounts?:
      | {
          /**
           * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
           */
          accruedRate?: string | null;
          /**
           * Display text providing more information on the discount
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this discount
           */
          additionalInfoUri?: string | null;
          /**
           * Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)
           */
          additionalValue?: string | null;
          /**
           * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
           */
          amount?: string | null;
          /**
           * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
           */
          balanceRate?: string | null;
          /**
           * Description of the discount
           */
          description: string;
          /**
           * The type of discount. See the next section for an overview of valid values and their meaning
           */
          discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
          /**
           * Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.
           */
          eligibility?:
            | {
                /**
                 * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
                 */
                additionalInfo?: string | null;
                /**
                 * Link to a web page with more information on this eligibility constraint
                 */
                additionalInfoUri?: string | null;
                /**
                 * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
                 */
                additionalValue?: string | null;
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
                [k: string]: unknown;
              }[]
            | null;
          /**
           * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
           */
          feeRate?: string | null;
          /**
           * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory
           */
          transactionRate?: string | null;
          [k: string]: unknown;
        }[]
      | null;
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
     * Name of the fee
     */
    name: string;
    /**
     * A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
     */
    transactionRate?: string | null;
    [k: string]: unknown;
  }[];
  /**
   * Interest rates available for deposits
   */
  depositRates?: {
    /**
     * Display text providing more information on the rate
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)
     */
    additionalValue?: string | null;
    /**
     * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    applicationFrequency?: string | null;
    /**
     * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    calculationFrequency?: string | null;
    /**
     * The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning
     */
    depositRateType: "BONUS" | "BUNDLE_BONUS" | "FIXED" | "FLOATING" | "INTRODUCTORY" | "MARKET_LINKED" | "VARIABLE";
    /**
     * The rate to be applied
     */
    rate: string;
    /**
     * Rate tiers applicable for this rate
     */
    tiers?:
      | {
          /**
           * Display text providing more information on the rate tier.
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this rate tier
           */
          additionalInfoUri?: string | null;
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
           * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
           */
          maximumValue?: number | null;
          /**
           * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
           */
          minimumValue: number;
          /**
           * A display name for the tier
           */
          name: string;
          /**
           * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
           */
          rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
          /**
           * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
           */
          unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
          [k: string]: unknown;
        }[]
      | null;
    [k: string]: unknown;
  }[];
  /**
   * Interest rates charged against lending balances
   */
  lendingRates?: {
    /**
     * Display text providing more information on the rate.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)
     */
    additionalValue?: string | null;
    /**
     * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    applicationFrequency?: string | null;
    /**
     * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    calculationFrequency?: string | null;
    /**
     * A comparison rate equivalent for this rate
     */
    comparisonRate?: string | null;
    /**
     * When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered
     */
    interestPaymentDue?: ("IN_ADVANCE" | "IN_ARREARS") | null;
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
     * The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes
     */
    loanPurpose?: ("INVESTMENT" | "OWNER_OCCUPIED") | null;
    /**
     * The rate to be applied
     */
    rate: string;
    /**
     * Options in place for repayments. If absent, the lending rate is applicable to all repayment types
     */
    repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
    /**
     * Rate tiers applicable for this rate
     */
    tiers?:
      | {
          /**
           * Display text providing more information on the rate tier.
           */
          additionalInfo?: string | null;
          /**
           * Link to a web page with more information on this rate tier
           */
          additionalInfoUri?: string | null;
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
           * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
           */
          maximumValue?: number | null;
          /**
           * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
           */
          minimumValue: number;
          /**
           * A display name for the tier
           */
          name: string;
          /**
           * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
           */
          rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
          /**
           * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
           */
          unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
          [k: string]: unknown;
        }[]
      | null;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductDiscount {
  /**
   * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
   */
  accruedRate?: string | null;
  /**
   * Display text providing more information on the discount
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this discount
   */
  additionalInfoUri?: string | null;
  /**
   * Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)
   */
  additionalValue?: string | null;
  /**
   * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
   */
  amount?: string | null;
  /**
   * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
   */
  balanceRate?: string | null;
  /**
   * Description of the discount
   */
  description: string;
  /**
   * The type of discount. See the next section for an overview of valid values and their meaning
   */
  discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
  /**
   * Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.
   */
  eligibility?:
    | {
        /**
         * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this eligibility constraint
         */
        additionalInfoUri?: string | null;
        /**
         * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
         */
        additionalValue?: string | null;
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
        [k: string]: unknown;
      }[]
    | null;
  /**
   * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
   */
  feeRate?: string | null;
  /**
   * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory
   */
  transactionRate?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductDiscountEligibility {
  /**
   * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this eligibility constraint
   */
  additionalInfoUri?: string | null;
  /**
   * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
   */
  additionalValue?: string | null;
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
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductEligibility {
  /**
   * Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to OTHER
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this eligibility criteria
   */
  additionalInfoUri?: string | null;
  /**
   * Generic field containing additional information relevant to the [eligibilityType](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [eligibilityType](#tocSproducteligibilitytypedoc)
   */
  additionalValue?: string | null;
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
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductFeatureV2 {
  /**
   * Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this feature
   */
  additionalInfoUri?: string | null;
  /**
   * Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)
   */
  additionalValue?: string | null;
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
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductFee {
  /**
   * The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
   */
  accrualFrequency?: string | null;
  /**
   * A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
   */
  accruedRate?: string | null;
  /**
   * Display text providing more information on the fee
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this fee
   */
  additionalInfoUri?: string | null;
  /**
   * Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)
   */
  additionalValue?: string | null;
  /**
   * The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
   */
  amount?: string | null;
  /**
   * A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.
   */
  balanceRate?: string | null;
  /**
   * The currency the fee will be charged in. Assumes AUD if absent
   */
  currency?: string | null;
  /**
   * An optional list of discounts to this fee that may be available
   */
  discounts?:
    | {
        /**
         * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
         */
        accruedRate?: string | null;
        /**
         * Display text providing more information on the discount
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this discount
         */
        additionalInfoUri?: string | null;
        /**
         * Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)
         */
        additionalValue?: string | null;
        /**
         * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
         */
        amount?: string | null;
        /**
         * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
         */
        balanceRate?: string | null;
        /**
         * Description of the discount
         */
        description: string;
        /**
         * The type of discount. See the next section for an overview of valid values and their meaning
         */
        discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
        /**
         * Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.
         */
        eligibility?:
          | {
              /**
               * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
               */
              additionalInfo?: string | null;
              /**
               * Link to a web page with more information on this eligibility constraint
               */
              additionalInfoUri?: string | null;
              /**
               * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
               */
              additionalValue?: string | null;
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
              [k: string]: unknown;
            }[]
          | null;
        /**
         * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
         */
        feeRate?: string | null;
        /**
         * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory
         */
        transactionRate?: string | null;
        [k: string]: unknown;
      }[]
    | null;
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
   * Name of the fee
   */
  name: string;
  /**
   * A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
   */
  transactionRate?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductLendingRateV2 {
  /**
   * Display text providing more information on the rate.
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this rate
   */
  additionalInfoUri?: string | null;
  /**
   * Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)
   */
  additionalValue?: string | null;
  /**
   * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
   */
  applicationFrequency?: string | null;
  /**
   * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
   */
  calculationFrequency?: string | null;
  /**
   * A comparison rate equivalent for this rate
   */
  comparisonRate?: string | null;
  /**
   * When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered
   */
  interestPaymentDue?: ("IN_ADVANCE" | "IN_ARREARS") | null;
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
   * The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes
   */
  loanPurpose?: ("INVESTMENT" | "OWNER_OCCUPIED") | null;
  /**
   * The rate to be applied
   */
  rate: string;
  /**
   * Options in place for repayments. If absent, the lending rate is applicable to all repayment types
   */
  repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
  /**
   * Rate tiers applicable for this rate
   */
  tiers?:
    | {
        /**
         * Display text providing more information on the rate tier.
         */
        additionalInfo?: string | null;
        /**
         * Link to a web page with more information on this rate tier
         */
        additionalInfoUri?: string | null;
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
         * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
         */
        maximumValue?: number | null;
        /**
         * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
         */
        minimumValue: number;
        /**
         * A display name for the tier
         */
        name: string;
        /**
         * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
         */
        rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
        /**
         * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
         */
        unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
        [k: string]: unknown;
      }[]
    | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Defines the criteria and conditions for which a rate applies
 */
export interface BankingProductRateTierV3 {
  /**
   * Display text providing more information on the rate tier.
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on this rate tier
   */
  additionalInfoUri?: string | null;
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
   * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
   */
  maximumValue?: number | null;
  /**
   * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
   */
  minimumValue: number;
  /**
   * A display name for the tier
   */
  name: string;
  /**
   * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
   */
  rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
  /**
   * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
   */
  unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductV4 {
  /**
   * Object that contains links to additional information on specific topics
   */
  additionalInformation?: {
    /**
     * An array of additional bundles for the product, if applicable. To be treated as secondary documents to the `bundleUri`. Only to be used if there is a primary `bundleUri`.
     */
    additionalBundleUris?:
      | {
          /**
           * The URI describing the additional information
           */
          additionalInfoUri: string;
          /**
           * Display text providing more information about the document URI
           */
          description?: string | null;
          [k: string]: unknown;
        }[]
      | null;
    /**
     * An array of additional eligibility rules and criteria for the product, if applicable. To be treated as secondary documents to the `eligibilityUri`. Only to be used if there is a primary `eligibilityUri`.
     */
    additionalEligibilityUris?:
      | {
          /**
           * The URI describing the additional information
           */
          additionalInfoUri: string;
          /**
           * Display text providing more information about the document URI
           */
          description?: string | null;
          [k: string]: unknown;
        }[]
      | null;
    /**
     * An array of additional fees, pricing, discounts, exemptions and bonuses for the product, if applicable. To be treated as secondary documents to the `feesAndPricingUri`. Only to be used if there is a primary `feesAndPricingUri`.
     */
    additionalFeesAndPricingUris?:
      | {
          /**
           * The URI describing the additional information
           */
          additionalInfoUri: string;
          /**
           * Display text providing more information about the document URI
           */
          description?: string | null;
          [k: string]: unknown;
        }[]
      | null;
    /**
     * An array of additional general overviews for the product or features of the product, if applicable. To be treated as secondary documents to the `overviewUri`. Only to be used if there is a primary `overviewUri`.
     */
    additionalOverviewUris?:
      | {
          /**
           * The URI describing the additional information
           */
          additionalInfoUri: string;
          /**
           * Display text providing more information about the document URI
           */
          description?: string | null;
          [k: string]: unknown;
        }[]
      | null;
    /**
     * An array of additional terms and conditions for the product, if applicable. To be treated as secondary documents to the `termsUri`. Only to be used if there is a primary `termsUri`.
     */
    additionalTermsUris?:
      | {
          /**
           * The URI describing the additional information
           */
          additionalInfoUri: string;
          /**
           * Display text providing more information about the document URI
           */
          description?: string | null;
          [k: string]: unknown;
        }[]
      | null;
    /**
     * Description of a bundle that this product can be part of. Mandatory if `additionalBundleUris` includes one or more supporting documents.
     */
    bundleUri?: string | null;
    /**
     * Eligibility rules and criteria for the product. Mandatory if `additionalEligibilityUris` includes one or more supporting documents.
     */
    eligibilityUri?: string | null;
    /**
     * Description of fees, pricing, discounts, exemptions and bonuses for the product. Mandatory if `additionalFeesAndPricingUris` includes one or more supporting documents.
     */
    feesAndPricingUri?: string | null;
    /**
     * General overview of the product. Mandatory if `additionalOverviewUris` includes one or more supporting documents.
     */
    overviewUri?: string | null;
    /**
     * Terms and conditions for the product. Mandatory if `additionalTermsUris` includes one or more supporting documents.
     */
    termsUri?: string | null;
    [k: string]: unknown;
  };
  /**
   * A link to an application web page where this product can be applied for.
   */
  applicationUri?: string | null;
  /**
   * A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required
   */
  brand: string;
  /**
   * An optional display name of the brand
   */
  brandName?: string | null;
  /**
   * An array of card art images
   */
  cardArt?:
    | {
        /**
         * URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI according to **[[RFC2397]](#nref-RFC2397)**
         */
        imageUri: string;
        /**
         * Display label for the specific image
         */
        title?: string;
        [k: string]: unknown;
      }[]
    | null;
  /**
   * A description of the product
   */
  description: string;
  /**
   * The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate
   */
  effectiveFrom?: string | null;
  /**
   * The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products
   */
  effectiveTo?: string | null;
  /**
   * Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable
   */
  isTailored: boolean;
  /**
   * The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)
   */
  lastUpdated: string;
  /**
   * The display name of the product
   */
  name: string;
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
   * A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
   */
  productId: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingScheduledPayment {
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
  /**
   * The short display name of the scheduled payment as provided by the customer if provided. Where a customer has not provided a nickname, a display name derived by the bank for the scheduled payment should be provided that is consistent with existing digital banking channels
   */
  nickname?: string | null;
  /**
   * The reference for the transaction, if applicable, that will be provided by the originating institution for all payments in the payment set. Empty string if no data provided
   */
  payeeReference?: string | null;
  /**
   * The reference for the transaction that will be used by the originating institution for the purposes of constructing a statement narrative on the payer’s account. Empty string if no data provided
   */
  payerReference: string;
  paymentSet: {
    /**
     * The amount of the next payment if known. Mandatory unless the isAmountCalculated field is set to true. Must be zero or positive if present
     */
    amount?: string | null;
    /**
     * The currency for the payment. AUD assumed if not present
     */
    currency?: string | null;
    /**
     * Flag indicating whether the amount of the payment is calculated based on the context of the event. For instance a payment to reduce the balance of a credit card to zero. If absent then false is assumed
     */
    isAmountCalculated?: boolean | null;
    /**
     * Object containing details of the destination of the payment. Used to specify a variety of payment destination types
     */
    to: {
      /**
       * Present if toUType is set to accountId. Indicates that the payment is to another account that is accessible under the current consent
       */
      accountId?: string | null;
      biller?: {
        /**
         * BPAY Biller Code of the Biller
         */
        billerCode: string;
        /**
         * Name of the Biller
         */
        billerName: string;
        /**
         * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
         */
        crn?: string | null;
        [k: string]: unknown;
      };
      domestic?: {
        account?: {
          /**
           * Name of the account to pay to
           */
          accountName?: string | null;
          /**
           * Number of the account to pay to
           */
          accountNumber: string;
          /**
           * BSB of the account to pay to
           */
          bsb: string;
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
           * The identifier of the PayID (dependent on type)
           */
          identifier: string;
          /**
           * The name assigned to the PayID by the owner of the PayID
           */
          name?: string | null;
          /**
           * The type of the PayID
           */
          type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
          [k: string]: unknown;
        };
        /**
         * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
         */
        payeeAccountUType: "account" | "card" | "payId";
        [k: string]: unknown;
      };
      international?: {
        bankDetails: {
          /**
           * Account Targeted for payment
           */
          accountNumber: string;
          bankAddress?: {
            /**
             * Address of the recipient Bank
             */
            address: string;
            /**
             * Name of the recipient Bank
             */
            name: string;
            [k: string]: unknown;
          } | null;
          /**
           * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
           */
          beneficiaryBankBIC?: string | null;
          /**
           * Number for the Clearing House Interbank Payments System
           */
          chipNumber?: string | null;
          /**
           * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
           */
          country: string;
          /**
           * Number for Fedwire payment (Federal Reserve Wire Network)
           */
          fedWireNumber?: string | null;
          /**
           * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
           */
          legalEntityIdentifier?: string | null;
          /**
           * International bank routing number
           */
          routingNumber?: string | null;
          /**
           * Sort code used for account identification in some jurisdictions
           */
          sortCode?: string | null;
          [k: string]: unknown;
        };
        beneficiaryDetails: {
          /**
           * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
           */
          country: string;
          /**
           * Response message for the payment
           */
          message?: string | null;
          /**
           * Name of the beneficiary
           */
          name?: string | null;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * The short display name of the payee as provided by the customer unless toUType is set to payeeId. Where a customer has not provided a nickname, a display name derived by the bank for payee should be provided that is consistent with existing digital banking channels
       */
      nickname?: string | null;
      /**
       * Present if toUType is set to payeeId. Indicates that the payment is to registered payee that can be accessed using the payee end point. If the Bank Payees scope has not been consented to then a payeeId should not be provided and the full payee details should be provided instead
       */
      payeeId?: string | null;
      /**
       * The reference for the transaction, if applicable, that will be provided by the originating institution for the specific payment. If not empty, it overrides the value provided at the BankingScheduledPayment level.
       */
      payeeReference?: string | null;
      /**
       * The type of object provided that specifies the destination of the funds for the payment.
       */
      toUType: "accountId" | "biller" | "domestic" | "international" | "payeeId";
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }[];
  /**
   * Object containing the detail of the schedule for the payment
   */
  recurrence: {
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
    /**
     * Indicates that the schedule of payments is defined by a series of intervals. Mandatory if recurrenceUType is set to intervalSchedule
     */
    intervalSchedule?: {
      /**
       * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
       */
      finalPaymentDate?: string | null;
      /**
       * An array of interval objects defining the payment schedule.  Each entry in the array is additive, in that it adds payments to the overall payment schedule.  If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry
       */
      intervals: {
        /**
         * Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is P1D. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.
         */
        dayInInterval?: string | null;
        /**
         * An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)  (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
         */
        interval: string;
        [k: string]: unknown;
      }[];
      /**
       * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
       */
      nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
      /**
       * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely
       */
      paymentsRemaining?: number | null;
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
      /**
       * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
       */
      paymentsRemaining?: number | null;
      [k: string]: unknown;
    };
    /**
     * The date of the next payment under the recurrence schedule
     */
    nextPaymentDate?: string | null;
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
     * The type of recurrence used to define the schedule
     */
    recurrenceUType: "eventBased" | "intervalSchedule" | "lastWeekDay" | "onceOff";
    [k: string]: unknown;
  };
  /**
   * A unique ID of the scheduled payment adhering to the standards for ID permanence
   */
  scheduledPaymentId: string;
  /**
   * Indicates whether the schedule is currently active. The value SKIP is equivalent to ACTIVE except that the customer has requested the next normal occurrence to be skipped.
   */
  status: "ACTIVE" | "INACTIVE" | "SKIP";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingScheduledPaymentInterval {
  /**
   * Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is P1D. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.
   */
  dayInInterval?: string | null;
  /**
   * An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)  (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
   */
  interval: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Object containing the detail of the schedule for the payment
 */
export interface BankingScheduledPaymentRecurrence {
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
  /**
   * Indicates that the schedule of payments is defined by a series of intervals. Mandatory if recurrenceUType is set to intervalSchedule
   */
  intervalSchedule?: {
    /**
     * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
     */
    finalPaymentDate?: string | null;
    /**
     * An array of interval objects defining the payment schedule.  Each entry in the array is additive, in that it adds payments to the overall payment schedule.  If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry
     */
    intervals: {
      /**
       * Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is P1D. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.
       */
      dayInInterval?: string | null;
      /**
       * An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)  (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
       */
      interval: string;
      [k: string]: unknown;
    }[];
    /**
     * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
     */
    nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
    /**
     * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely
     */
    paymentsRemaining?: number | null;
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
    /**
     * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
     */
    paymentsRemaining?: number | null;
    [k: string]: unknown;
  };
  /**
   * The date of the next payment under the recurrence schedule
   */
  nextPaymentDate?: string | null;
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
   * The type of recurrence used to define the schedule
   */
  recurrenceUType: "eventBased" | "intervalSchedule" | "lastWeekDay" | "onceOff";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Indicates that the schedule of payments is defined by a series of intervals. Mandatory if recurrenceUType is set to intervalSchedule
 */
export interface BankingScheduledPaymentRecurrenceIntervalSchedule {
  /**
   * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
   */
  finalPaymentDate?: string | null;
  /**
   * An array of interval objects defining the payment schedule.  Each entry in the array is additive, in that it adds payments to the overall payment schedule.  If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry
   */
  intervals: {
    /**
     * Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is P1D. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.
     */
    dayInInterval?: string | null;
    /**
     * An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)  (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
     */
    interval: string;
    [k: string]: unknown;
  }[];
  /**
   * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
   */
  nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
  /**
   * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely
   */
  paymentsRemaining?: number | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if recurrenceUType is set to lastWeekDay
 */
export interface BankingScheduledPaymentRecurrenceLastWeekday {
  /**
   * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
   */
  finalPaymentDate?: string | null;
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
  /**
   * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
   */
  paymentsRemaining?: number | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * The set of payment amounts and destination accounts for this payment accommodating multi-part payments. A single entry indicates a simple payment with one destination account. Must have at least one entry
 */
export interface BankingScheduledPaymentSet {
  /**
   * The amount of the next payment if known. Mandatory unless the isAmountCalculated field is set to true. Must be zero or positive if present
   */
  amount?: string | null;
  /**
   * The currency for the payment. AUD assumed if not present
   */
  currency?: string | null;
  /**
   * Flag indicating whether the amount of the payment is calculated based on the context of the event. For instance a payment to reduce the balance of a credit card to zero. If absent then false is assumed
   */
  isAmountCalculated?: boolean | null;
  /**
   * Object containing details of the destination of the payment. Used to specify a variety of payment destination types
   */
  to: {
    /**
     * Present if toUType is set to accountId. Indicates that the payment is to another account that is accessible under the current consent
     */
    accountId?: string | null;
    biller?: {
      /**
       * BPAY Biller Code of the Biller
       */
      billerCode: string;
      /**
       * Name of the Biller
       */
      billerName: string;
      /**
       * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
       */
      crn?: string | null;
      [k: string]: unknown;
    };
    domestic?: {
      account?: {
        /**
         * Name of the account to pay to
         */
        accountName?: string | null;
        /**
         * Number of the account to pay to
         */
        accountNumber: string;
        /**
         * BSB of the account to pay to
         */
        bsb: string;
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
         * The identifier of the PayID (dependent on type)
         */
        identifier: string;
        /**
         * The name assigned to the PayID by the owner of the PayID
         */
        name?: string | null;
        /**
         * The type of the PayID
         */
        type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
        [k: string]: unknown;
      };
      /**
       * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
       */
      payeeAccountUType: "account" | "card" | "payId";
      [k: string]: unknown;
    };
    international?: {
      bankDetails: {
        /**
         * Account Targeted for payment
         */
        accountNumber: string;
        bankAddress?: {
          /**
           * Address of the recipient Bank
           */
          address: string;
          /**
           * Name of the recipient Bank
           */
          name: string;
          [k: string]: unknown;
        } | null;
        /**
         * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
         */
        beneficiaryBankBIC?: string | null;
        /**
         * Number for the Clearing House Interbank Payments System
         */
        chipNumber?: string | null;
        /**
         * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
         */
        country: string;
        /**
         * Number for Fedwire payment (Federal Reserve Wire Network)
         */
        fedWireNumber?: string | null;
        /**
         * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
         */
        legalEntityIdentifier?: string | null;
        /**
         * International bank routing number
         */
        routingNumber?: string | null;
        /**
         * Sort code used for account identification in some jurisdictions
         */
        sortCode?: string | null;
        [k: string]: unknown;
      };
      beneficiaryDetails: {
        /**
         * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
         */
        country: string;
        /**
         * Response message for the payment
         */
        message?: string | null;
        /**
         * Name of the beneficiary
         */
        name?: string | null;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * The short display name of the payee as provided by the customer unless toUType is set to payeeId. Where a customer has not provided a nickname, a display name derived by the bank for payee should be provided that is consistent with existing digital banking channels
     */
    nickname?: string | null;
    /**
     * Present if toUType is set to payeeId. Indicates that the payment is to registered payee that can be accessed using the payee end point. If the Bank Payees scope has not been consented to then a payeeId should not be provided and the full payee details should be provided instead
     */
    payeeId?: string | null;
    /**
     * The reference for the transaction, if applicable, that will be provided by the originating institution for the specific payment. If not empty, it overrides the value provided at the BankingScheduledPayment level.
     */
    payeeReference?: string | null;
    /**
     * The type of object provided that specifies the destination of the funds for the payment.
     */
    toUType: "accountId" | "biller" | "domestic" | "international" | "payeeId";
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Object containing details of the destination of the payment. Used to specify a variety of payment destination types
 */
export interface BankingScheduledPaymentTo {
  /**
   * Present if toUType is set to accountId. Indicates that the payment is to another account that is accessible under the current consent
   */
  accountId?: string | null;
  biller?: {
    /**
     * BPAY Biller Code of the Biller
     */
    billerCode: string;
    /**
     * Name of the Biller
     */
    billerName: string;
    /**
     * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
     */
    crn?: string | null;
    [k: string]: unknown;
  };
  domestic?: {
    account?: {
      /**
       * Name of the account to pay to
       */
      accountName?: string | null;
      /**
       * Number of the account to pay to
       */
      accountNumber: string;
      /**
       * BSB of the account to pay to
       */
      bsb: string;
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
       * The identifier of the PayID (dependent on type)
       */
      identifier: string;
      /**
       * The name assigned to the PayID by the owner of the PayID
       */
      name?: string | null;
      /**
       * The type of the PayID
       */
      type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
      [k: string]: unknown;
    };
    /**
     * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
     */
    payeeAccountUType: "account" | "card" | "payId";
    [k: string]: unknown;
  };
  international?: {
    bankDetails: {
      /**
       * Account Targeted for payment
       */
      accountNumber: string;
      bankAddress?: {
        /**
         * Address of the recipient Bank
         */
        address: string;
        /**
         * Name of the recipient Bank
         */
        name: string;
        [k: string]: unknown;
      } | null;
      /**
       * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
       */
      beneficiaryBankBIC?: string | null;
      /**
       * Number for the Clearing House Interbank Payments System
       */
      chipNumber?: string | null;
      /**
       * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
       */
      country: string;
      /**
       * Number for Fedwire payment (Federal Reserve Wire Network)
       */
      fedWireNumber?: string | null;
      /**
       * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
       */
      legalEntityIdentifier?: string | null;
      /**
       * International bank routing number
       */
      routingNumber?: string | null;
      /**
       * Sort code used for account identification in some jurisdictions
       */
      sortCode?: string | null;
      [k: string]: unknown;
    };
    beneficiaryDetails: {
      /**
       * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
       */
      country: string;
      /**
       * Response message for the payment
       */
      message?: string | null;
      /**
       * Name of the beneficiary
       */
      name?: string | null;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * The short display name of the payee as provided by the customer unless toUType is set to payeeId. Where a customer has not provided a nickname, a display name derived by the bank for payee should be provided that is consistent with existing digital banking channels
   */
  nickname?: string | null;
  /**
   * Present if toUType is set to payeeId. Indicates that the payment is to registered payee that can be accessed using the payee end point. If the Bank Payees scope has not been consented to then a payeeId should not be provided and the full payee details should be provided instead
   */
  payeeId?: string | null;
  /**
   * The reference for the transaction, if applicable, that will be provided by the originating institution for the specific payment. If not empty, it overrides the value provided at the BankingScheduledPayment level.
   */
  payeeReference?: string | null;
  /**
   * The type of object provided that specifies the destination of the funds for the payment.
   */
  toUType: "accountId" | "biller" | "domestic" | "international" | "payeeId";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingTermDepositAccount {
  /**
   * The lodgement date of the original deposit
   */
  lodgementDate: string;
  /**
   * Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated
   */
  maturityAmount?: string | null;
  /**
   * If absent assumes AUD
   */
  maturityCurrency?: string | null;
  /**
   * Maturity date for the term deposit
   */
  maturityDate: string;
  /**
   * Current instructions on action to be taken at maturity. This includes default actions that may be specified in the terms and conditions for the product e.g. roll-over to the same term and frequency of interest payments
   */
  maturityInstructions: "HOLD_ON_MATURITY" | "PAID_OUT_AT_MATURITY" | "ROLLED_OVER";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingTransaction {
  /**
   * ID of the account for which transactions are provided
   */
  accountId: string;
  /**
   * The value of the transaction. Negative values mean money was outgoing from the account
   */
  amount: string;
  /**
   * 6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.
   */
  apcaNumber?: string | null;
  /**
   * BPAY Biller Code for the transaction (if available)
   */
  billerCode?: string | null;
  /**
   * Name of the BPAY biller for the transaction (if available)
   */
  billerName?: string | null;
  /**
   * BPAY CRN for the transaction (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
   */
  crn?: string | null;
  /**
   * The currency for the transaction amount. AUD assumed if not present
   */
  currency?: string | null;
  /**
   * The transaction description as applied by the financial institution
   */
  description: string;
  /**
   * The time the transaction was executed by the originating customer, if available
   */
  executionDateTime?: string | null;
  /**
   * True if extended information is available using the transaction detail end point. False if extended data is not available
   */
  isDetailAvailable: boolean;
  /**
   * The merchant category code (or MCC) for an outgoing payment to a merchant
   */
  merchantCategoryCode?: string | null;
  /**
   * Name of the merchant for an outgoing payment to a merchant
   */
  merchantName?: string | null;
  /**
   * The time the transaction was posted. This field is Mandatory if the transaction has status POSTED.  This is the time that appears on a standard statement
   */
  postingDateTime?: string | null;
  /**
   * The reference for the transaction provided by the originating institution. Empty string if no data provided
   */
  reference: string;
  /**
   * Status of the transaction whether pending or posted. Note that there is currently no provision in the standards to guarantee the ability to correlate a pending transaction with an associated posted transaction
   */
  status: "PENDING" | "POSTED";
  /**
   * A unique ID of the transaction adhering to the standards for ID permanence.  This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type. It is mandatory if `isDetailAvailable` is set to true.
   */
  transactionId?: string | null;
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
   * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry
   */
  valueDateTime?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingTransactionDetail extends BankingTransaction {
  extendedData: {
    /**
     * Label of the originating payer. Mandatory for inbound payment
     */
    payer?: string;
    /**
     * Label of the target PayID.  Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID)
     */
    payee?: string;
    /**
     * Optional extended data provided specific to transaction originated via NPP
     */
    extensionUType?: "x2p101Payload";
    x2p101Payload?: {
      /**
       * An extended string description. Only present if specified by the extensionUType field
       */
      extendedDescription: string;
      /**
       * An end to end ID for the payment created at initiation
       */
      endToEndId?: string;
      /**
       * Purpose of the payment.  Format is defined by NPP standards for the x2p1.01 overlay service
       */
      purposeCode?: string;
      [k: string]: unknown;
    };
    /**
     * Identifier of the applicable overlay service. Valid values are: X2P1.01
     */
    service: "X2P1.01";
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
 */
export interface CommonPAFAddress {
  /**
   * Building/Property name 1
   */
  buildingName1?: string | null;
  /**
   * Building/Property name 2
   */
  buildingName2?: string | null;
  /**
   * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
   */
  dpid?: string | null;
  /**
   * Unit number (including suffix, if applicable)
   */
  flatUnitNumber?: string | null;
  /**
   * Type of flat or unit for the address
   */
  flatUnitType?: string | null;
  /**
   * Floor or level number (including alpha characters)
   */
  floorLevelNumber?: string | null;
  /**
   * Type of floor or level for the address
   */
  floorLevelType?: string | null;
  /**
   * Full name of locality
   */
  localityName: string;
  /**
   * Allotment number for the address
   */
  lotNumber?: string | null;
  /**
   * Postal delivery number if the address is a postal delivery type
   */
  postalDeliveryNumber?: number | null;
  /**
   * Postal delivery number prefix related to the postal delivery number
   */
  postalDeliveryNumberPrefix?: string | null;
  /**
   * Postal delivery number suffix related to the postal delivery number
   */
  postalDeliveryNumberSuffix?: string | null;
  /**
   * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
   */
  postalDeliveryType?: string | null;
  /**
   * Postcode for the locality
   */
  postcode: string;
  /**
   * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
   */
  state: string;
  /**
   * The name of the street
   */
  streetName?: string | null;
  /**
   * The street type suffix. Valid enumeration defined by Australia Post PAF code file
   */
  streetSuffix?: string | null;
  /**
   * The street type. Valid enumeration defined by Australia Post PAF code file
   */
  streetType?: string | null;
  /**
   * Thoroughfare number for a property (first number in a property ranged address)
   */
  thoroughfareNumber1?: number | null;
  /**
   * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
   */
  thoroughfareNumber1Suffix?: string | null;
  /**
   * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
   */
  thoroughfareNumber2?: number | null;
  /**
   * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
   */
  thoroughfareNumber2Suffix?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface CommonPhysicalAddress {
  /**
   * The type of address object present
   */
  addressUType: "paf" | "simple";
  /**
   * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
   */
  paf?: {
    /**
     * Building/Property name 1
     */
    buildingName1?: string | null;
    /**
     * Building/Property name 2
     */
    buildingName2?: string | null;
    /**
     * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
     */
    dpid?: string | null;
    /**
     * Unit number (including suffix, if applicable)
     */
    flatUnitNumber?: string | null;
    /**
     * Type of flat or unit for the address
     */
    flatUnitType?: string | null;
    /**
     * Floor or level number (including alpha characters)
     */
    floorLevelNumber?: string | null;
    /**
     * Type of floor or level for the address
     */
    floorLevelType?: string | null;
    /**
     * Full name of locality
     */
    localityName: string;
    /**
     * Allotment number for the address
     */
    lotNumber?: string | null;
    /**
     * Postal delivery number if the address is a postal delivery type
     */
    postalDeliveryNumber?: number | null;
    /**
     * Postal delivery number prefix related to the postal delivery number
     */
    postalDeliveryNumberPrefix?: string | null;
    /**
     * Postal delivery number suffix related to the postal delivery number
     */
    postalDeliveryNumberSuffix?: string | null;
    /**
     * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
     */
    postalDeliveryType?: string | null;
    /**
     * Postcode for the locality
     */
    postcode: string;
    /**
     * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
     */
    state: string;
    /**
     * The name of the street
     */
    streetName?: string | null;
    /**
     * The street type suffix. Valid enumeration defined by Australia Post PAF code file
     */
    streetSuffix?: string | null;
    /**
     * The street type. Valid enumeration defined by Australia Post PAF code file
     */
    streetType?: string | null;
    /**
     * Thoroughfare number for a property (first number in a property ranged address)
     */
    thoroughfareNumber1?: number | null;
    /**
     * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
     */
    thoroughfareNumber1Suffix?: string | null;
    /**
     * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
     */
    thoroughfareNumber2?: number | null;
    /**
     * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
     */
    thoroughfareNumber2Suffix?: string | null;
    [k: string]: unknown;
  };
  simple?: {
    /**
     * First line of the standard address object
     */
    addressLine1: string;
    /**
     * Second line of the standard address object
     */
    addressLine2?: string | null;
    /**
     * Third line of the standard address object
     */
    addressLine3?: string | null;
    /**
     * Name of the city or locality
     */
    city: string;
    /**
     * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
     */
    country?: string | null;
    /**
     * Name of the individual or business formatted for inclusion in an address used for physical mail
     */
    mailingName?: string | null;
    /**
     * Mandatory for Australian addresses
     */
    postcode?: string | null;
    /**
     * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
     */
    state: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface CommonSimpleAddress {
  /**
   * First line of the standard address object
   */
  addressLine1: string;
  /**
   * Second line of the standard address object
   */
  addressLine2?: string | null;
  /**
   * Third line of the standard address object
   */
  addressLine3?: string | null;
  /**
   * Name of the city or locality
   */
  city: string;
  /**
   * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
   */
  country?: string | null;
  /**
   * Name of the individual or business formatted for inclusion in an address used for physical mail
   */
  mailingName?: string | null;
  /**
   * Mandatory for Australian addresses
   */
  postcode?: string | null;
  /**
   * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
   */
  state: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface Links {
  /**
   * Fully qualified link that generated the current response document
   */
  self: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface LinksPaginated {
  /**
   * URI to the first page of this set. Mandatory if this response is not the first page
   */
  first?: string | null;
  /**
   * URI to the last page of this set. Mandatory if this response is not the last page
   */
  last?: string | null;
  /**
   * URI to the next page of this set. Mandatory if this response is not the last page
   */
  next?: string | null;
  /**
   * URI to the previous page of this set. Mandatory if this response is not the first page
   */
  prev?: string | null;
  /**
   * Fully qualified link that generated the current response document
   */
  self: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface Meta {
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Additional data for customised error codes
 */
export interface MetaError {
  /**
   * The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.
   */
  urn?: string | null;
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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
     * Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then 'true' is assumed
     */
    isOwned?: boolean | null;
    /**
     * A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number
     */
    maskedNumber: string;
    /**
     * A customer supplied nick name for the account
     */
    nickname?: string | null;
    /**
     * Open or closed status for the account. If not present then OPEN is assumed
     */
    openStatus?: ("CLOSED" | "OPEN") | null;
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
    bsb?: string;
    /**
     * The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces
     */
    accountNumber?: string;
    /**
     * Optional field to indicate if this account is part of a bundle that is providing additional benefit for to the customer
     */
    bundleName?: string;
    /**
     * The type of structure to present account specific fields.
     */
    specificAccountUType?: "creditCard" | "loan" | "termDeposit";
    termDeposit?: {
      /**
       * The lodgement date of the original deposit
       */
      lodgementDate: string;
      /**
       * Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated
       */
      maturityAmount?: string | null;
      /**
       * If absent assumes AUD
       */
      maturityCurrency?: string | null;
      /**
       * Maturity date for the term deposit
       */
      maturityDate: string;
      /**
       * Current instructions on action to be taken at maturity. This includes default actions that may be specified in the terms and conditions for the product e.g. roll-over to the same term and frequency of interest payments
       */
      maturityInstructions: "HOLD_ON_MATURITY" | "PAID_OUT_AT_MATURITY" | "ROLLED_OVER";
      [k: string]: unknown;
    }[];
    creditCard?: {
      /**
       * The minimum payment amount due for the next card payment
       */
      minPaymentAmount: string;
      /**
       * If absent assumes AUD
       */
      paymentCurrency?: string | null;
      /**
       * The amount due for the next card payment
       */
      paymentDueAmount: string;
      /**
       * Date that the next payment for the card is due
       */
      paymentDueDate: string;
      [k: string]: unknown;
    };
    loan?: {
      /**
       * Date that the loan is due to be repaid in full
       */
      loanEndDate?: string | null;
      /**
       * Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account
       */
      maxRedraw?: string | null;
      /**
       * If absent assumes AUD
       */
      maxRedrawCurrency?: string | null;
      /**
       * Minimum amount of next instalment
       */
      minInstalmentAmount?: string | null;
      /**
       * If absent assumes AUD
       */
      minInstalmentCurrency?: string | null;
      /**
       * Minimum redraw amount
       */
      minRedraw?: string | null;
      /**
       * If absent assumes AUD
       */
      minRedrawCurrency?: string | null;
      /**
       * Next date that an instalment is required
       */
      nextInstalmentDate?: string | null;
      /**
       * Set to true if one or more offset accounts are configured for this loan account
       */
      offsetAccountEnabled?: boolean | null;
      /**
       * The accountIDs of the configured offset accounts attached to this loan. Only offset accounts that can be accessed under the current authorisation should be included. It is expected behaviour that offsetAccountEnabled is set to true but the offsetAccountIds field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation
       */
      offsetAccountIds?: string[] | null;
      /**
       * Optional original loan value
       */
      originalLoanAmount?: string | null;
      /**
       * If absent assumes AUD
       */
      originalLoanCurrency?: string | null;
      /**
       * Optional original start date for the loan
       */
      originalStartDate?: string | null;
      /**
       * The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      repaymentFrequency?: string | null;
      /**
       * Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST
       */
      repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
      [k: string]: unknown;
    };
    /**
     * current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call
     */
    depositRate?: string;
    /**
     * The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call
     */
    lendingRate?: string;
    /**
     * Fully described deposit rates for this account based on the equivalent structure in Product Reference
     */
    depositRates?: {
      /**
       * Display text providing more information on the rate
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this rate
       */
      additionalInfoUri?: string | null;
      /**
       * Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)
       */
      additionalValue?: string | null;
      /**
       * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      applicationFrequency?: string | null;
      /**
       * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      calculationFrequency?: string | null;
      /**
       * The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning
       */
      depositRateType: "BONUS" | "BUNDLE_BONUS" | "FIXED" | "FLOATING" | "INTRODUCTORY" | "MARKET_LINKED" | "VARIABLE";
      /**
       * The rate to be applied
       */
      rate: string;
      /**
       * Rate tiers applicable for this rate
       */
      tiers?:
        | {
            /**
             * Display text providing more information on the rate tier.
             */
            additionalInfo?: string | null;
            /**
             * Link to a web page with more information on this rate tier
             */
            additionalInfoUri?: string | null;
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
             * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
             */
            maximumValue?: number | null;
            /**
             * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
             */
            minimumValue: number;
            /**
             * A display name for the tier
             */
            name: string;
            /**
             * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
             */
            rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
            /**
             * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
             */
            unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
            [k: string]: unknown;
          }[]
        | null;
      [k: string]: unknown;
    }[];
    /**
     * Fully described deposit rates for this account based on the equivalent structure in Product Reference
     */
    lendingRates?: {
      /**
       * Display text providing more information on the rate.
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this rate
       */
      additionalInfoUri?: string | null;
      /**
       * Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)
       */
      additionalValue?: string | null;
      /**
       * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      applicationFrequency?: string | null;
      /**
       * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      calculationFrequency?: string | null;
      /**
       * A comparison rate equivalent for this rate
       */
      comparisonRate?: string | null;
      /**
       * When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered
       */
      interestPaymentDue?: ("IN_ADVANCE" | "IN_ARREARS") | null;
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
       * The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes
       */
      loanPurpose?: ("INVESTMENT" | "OWNER_OCCUPIED") | null;
      /**
       * The rate to be applied
       */
      rate: string;
      /**
       * Options in place for repayments. If absent, the lending rate is applicable to all repayment types
       */
      repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
      /**
       * Rate tiers applicable for this rate
       */
      tiers?:
        | {
            /**
             * Display text providing more information on the rate tier.
             */
            additionalInfo?: string | null;
            /**
             * Link to a web page with more information on this rate tier
             */
            additionalInfoUri?: string | null;
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
             * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
             */
            maximumValue?: number | null;
            /**
             * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
             */
            minimumValue: number;
            /**
             * A display name for the tier
             */
            name: string;
            /**
             * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
             */
            rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
            /**
             * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
             */
            unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
            [k: string]: unknown;
          }[]
        | null;
      [k: string]: unknown;
    }[];
    /**
     * Array of features of the account based on the equivalent structure in Product Reference with the following additional field
     */
    features?: ({
      /**
       * Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this feature
       */
      additionalInfoUri?: string | null;
      /**
       * Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)
       */
      additionalValue?: string | null;
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
      [k: string]: unknown;
    } & {
      /**
       * True if the feature is already activated and false if the feature is available for activation. Defaults to true if absent. (note this is an additional field appended to the feature object defined in the Product Reference payload)
       */
      isActivated?: boolean;
      [k: string]: unknown;
    })[];
    /**
     * Fees and charges applicable to the account based on the equivalent structure in Product Reference
     */
    fees?: {
      /**
       * The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      accrualFrequency?: string | null;
      /**
       * A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      accruedRate?: string | null;
      /**
       * Display text providing more information on the fee
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this fee
       */
      additionalInfoUri?: string | null;
      /**
       * Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)
       */
      additionalValue?: string | null;
      /**
       * The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      amount?: string | null;
      /**
       * A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.
       */
      balanceRate?: string | null;
      /**
       * The currency the fee will be charged in. Assumes AUD if absent
       */
      currency?: string | null;
      /**
       * An optional list of discounts to this fee that may be available
       */
      discounts?:
        | {
            /**
             * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
             */
            accruedRate?: string | null;
            /**
             * Display text providing more information on the discount
             */
            additionalInfo?: string | null;
            /**
             * Link to a web page with more information on this discount
             */
            additionalInfoUri?: string | null;
            /**
             * Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)
             */
            additionalValue?: string | null;
            /**
             * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
             */
            amount?: string | null;
            /**
             * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
             */
            balanceRate?: string | null;
            /**
             * Description of the discount
             */
            description: string;
            /**
             * The type of discount. See the next section for an overview of valid values and their meaning
             */
            discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
            /**
             * Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.
             */
            eligibility?:
              | {
                  /**
                   * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
                   */
                  additionalInfo?: string | null;
                  /**
                   * Link to a web page with more information on this eligibility constraint
                   */
                  additionalInfoUri?: string | null;
                  /**
                   * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
                   */
                  additionalValue?: string | null;
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
                  [k: string]: unknown;
                }[]
              | null;
            /**
             * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
             */
            feeRate?: string | null;
            /**
             * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory
             */
            transactionRate?: string | null;
            [k: string]: unknown;
          }[]
        | null;
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
       * Name of the fee
       */
      name: string;
      /**
       * A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      transactionRate?: string | null;
      [k: string]: unknown;
    }[];
    /**
     * The addresses for the account to be used for correspondence
     */
    addresses?: {
      /**
       * The type of address object present
       */
      addressUType: "paf" | "simple";
      /**
       * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
       */
      paf?: {
        /**
         * Building/Property name 1
         */
        buildingName1?: string | null;
        /**
         * Building/Property name 2
         */
        buildingName2?: string | null;
        /**
         * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
         */
        dpid?: string | null;
        /**
         * Unit number (including suffix, if applicable)
         */
        flatUnitNumber?: string | null;
        /**
         * Type of flat or unit for the address
         */
        flatUnitType?: string | null;
        /**
         * Floor or level number (including alpha characters)
         */
        floorLevelNumber?: string | null;
        /**
         * Type of floor or level for the address
         */
        floorLevelType?: string | null;
        /**
         * Full name of locality
         */
        localityName: string;
        /**
         * Allotment number for the address
         */
        lotNumber?: string | null;
        /**
         * Postal delivery number if the address is a postal delivery type
         */
        postalDeliveryNumber?: number | null;
        /**
         * Postal delivery number prefix related to the postal delivery number
         */
        postalDeliveryNumberPrefix?: string | null;
        /**
         * Postal delivery number suffix related to the postal delivery number
         */
        postalDeliveryNumberSuffix?: string | null;
        /**
         * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
         */
        postalDeliveryType?: string | null;
        /**
         * Postcode for the locality
         */
        postcode: string;
        /**
         * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
         */
        state: string;
        /**
         * The name of the street
         */
        streetName?: string | null;
        /**
         * The street type suffix. Valid enumeration defined by Australia Post PAF code file
         */
        streetSuffix?: string | null;
        /**
         * The street type. Valid enumeration defined by Australia Post PAF code file
         */
        streetType?: string | null;
        /**
         * Thoroughfare number for a property (first number in a property ranged address)
         */
        thoroughfareNumber1?: number | null;
        /**
         * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
         */
        thoroughfareNumber1Suffix?: string | null;
        /**
         * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
         */
        thoroughfareNumber2?: number | null;
        /**
         * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
         */
        thoroughfareNumber2Suffix?: string | null;
        [k: string]: unknown;
      };
      simple?: {
        /**
         * First line of the standard address object
         */
        addressLine1: string;
        /**
         * Second line of the standard address object
         */
        addressLine2?: string | null;
        /**
         * Third line of the standard address object
         */
        addressLine3?: string | null;
        /**
         * Name of the city or locality
         */
        city: string;
        /**
         * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
         */
        country?: string | null;
        /**
         * Name of the individual or business formatted for inclusion in an address used for physical mail
         */
        mailingName?: string | null;
        /**
         * Mandatory for Australian addresses
         */
        postcode?: string | null;
        /**
         * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
         */
        state: string;
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
    [k: string]: unknown;
  };
  meta?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
       * Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then 'true' is assumed
       */
      isOwned?: boolean | null;
      /**
       * A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number
       */
      maskedNumber: string;
      /**
       * A customer supplied nick name for the account
       */
      nickname?: string | null;
      /**
       * Open or closed status for the account. If not present then OPEN is assumed
       */
      openStatus?: ("CLOSED" | "OPEN") | null;
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
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingAccountsBalanceById {
  data: {
    /**
     * A unique ID of the account adhering to the standards for ID permanence
     */
    accountId: string;
    /**
     * Object representing the available limit amortised according to payment schedule. Assumed to be zero if absent
     */
    amortisedLimit?: string | null;
    /**
     * Balance representing the amount of funds available for transfer. Assumed to be zero or positive
     */
    availableBalance: string;
    /**
     * Object representing the maximum amount of credit that is available for this account. Assumed to be zero if absent
     */
    creditLimit?: string | null;
    /**
     * The currency for the balance amounts. If absent assumed to be AUD
     */
    currency?: string | null;
    /**
     * The balance of the account at this time. Should align to the balance available via other channels such as Internet Banking. Assumed to be negative if the customer has money owing
     */
    currentBalance: string;
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
    [k: string]: unknown;
  };
  meta?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
       * Object representing the available limit amortised according to payment schedule. Assumed to be zero if absent
       */
      amortisedLimit?: string | null;
      /**
       * Balance representing the amount of funds available for transfer. Assumed to be zero or positive
       */
      availableBalance: string;
      /**
       * Object representing the maximum amount of credit that is available for this account. Assumed to be zero if absent
       */
      creditLimit?: string | null;
      /**
       * The currency for the balance amounts. If absent assumed to be AUD
       */
      currency?: string | null;
      /**
       * The balance of the account at this time. Should align to the balance available via other channels such as Internet Banking. Assumed to be negative if the customer has money owing
       */
      currentBalance: string;
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
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
        /**
         * Description of the authorised entity derived from previously executed direct debits
         */
        description?: string | null;
        /**
         * Name of the financial institution through which the direct debit will be executed. Is required unless the payment is made via a credit card scheme
         */
        financialInstitution?: string | null;
        [k: string]: unknown;
      };
      /**
       * The amount of the last debit executed under this authorisation
       */
      lastDebitAmount?: string | null;
      /**
       * The date and time of the last debit executed under this authorisation
       */
      lastDebitDateTime?: string | null;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingPayeeByIdV2 {
  data: {
    /**
     * The date the payee was created by the customer
     */
    creationDate?: string | null;
    /**
     * A description of the payee provided by the customer
     */
    description?: string | null;
    /**
     * The short display name of the payee as provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank for the payee consistent with existing digital banking channels
     */
    nickname: string;
    /**
     * ID of the payee adhering to the rules of ID permanence
     */
    payeeId: string;
    /**
     * The type of payee.<br/>DOMESTIC means a registered payee for domestic payments including NPP. <br/>INTERNATIONAL means a registered payee for international payments. <br/>BILLER means a registered payee for BPAY. <br/>DIGITAL_WALLET means a registered payee for a bank's digital wallet
     */
    type: "BILLER" | "DIGITAL_WALLET" | "DOMESTIC" | "INTERNATIONAL";
    [k: string]: unknown;
  } & {
    /**
     * Type of object included that describes the payee in detail
     */
    payeeUType: "biller" | "digitalWallet" | "domestic" | "international";
    biller?: {
      /**
       * BPAY Biller Code of the Biller
       */
      billerCode: string;
      /**
       * Name of the Biller
       */
      billerName: string;
      /**
       * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
       */
      crn?: string | null;
      [k: string]: unknown;
    };
    domestic?: {
      account?: {
        /**
         * Name of the account to pay to
         */
        accountName?: string | null;
        /**
         * Number of the account to pay to
         */
        accountNumber: string;
        /**
         * BSB of the account to pay to
         */
        bsb: string;
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
         * The identifier of the PayID (dependent on type)
         */
        identifier: string;
        /**
         * The name assigned to the PayID by the owner of the PayID
         */
        name?: string | null;
        /**
         * The type of the PayID
         */
        type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
        [k: string]: unknown;
      };
      /**
       * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
       */
      payeeAccountUType: "account" | "card" | "payId";
      [k: string]: unknown;
    };
    digitalWallet?: {
      /**
       * The identifier of the digital wallet (dependent on type)
       */
      identifier: string;
      /**
       * The name assigned to the digital wallet by the owner of the wallet, else the display name provided by the digital wallet provider
       */
      name: string;
      /**
       * The provider of the digital wallet
       */
      provider: "PAYPAL_AU" | "OTHER";
      /**
       * The type of the digital wallet identifier
       */
      type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
      [k: string]: unknown;
    };
    international?: {
      bankDetails: {
        /**
         * Account Targeted for payment
         */
        accountNumber: string;
        bankAddress?: {
          /**
           * Address of the recipient Bank
           */
          address: string;
          /**
           * Name of the recipient Bank
           */
          name: string;
          [k: string]: unknown;
        } | null;
        /**
         * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
         */
        beneficiaryBankBIC?: string | null;
        /**
         * Number for the Clearing House Interbank Payments System
         */
        chipNumber?: string | null;
        /**
         * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
         */
        country: string;
        /**
         * Number for Fedwire payment (Federal Reserve Wire Network)
         */
        fedWireNumber?: string | null;
        /**
         * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
         */
        legalEntityIdentifier?: string | null;
        /**
         * International bank routing number
         */
        routingNumber?: string | null;
        /**
         * Sort code used for account identification in some jurisdictions
         */
        sortCode?: string | null;
        [k: string]: unknown;
      };
      beneficiaryDetails: {
        /**
         * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
         */
        country: string;
        /**
         * Response message for the payment
         */
        message?: string | null;
        /**
         * Name of the beneficiary
         */
        name?: string | null;
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
    [k: string]: unknown;
  };
  meta?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingPayeeListV2 {
  data: {
    /**
     * The list of payees returned
     */
    payees: {
      /**
       * The date the payee was created by the customer
       */
      creationDate?: string | null;
      /**
       * A description of the payee provided by the customer
       */
      description?: string | null;
      /**
       * The short display name of the payee as provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank for the payee consistent with existing digital banking channels
       */
      nickname: string;
      /**
       * ID of the payee adhering to the rules of ID permanence
       */
      payeeId: string;
      /**
       * The type of payee.<br/>DOMESTIC means a registered payee for domestic payments including NPP. <br/>INTERNATIONAL means a registered payee for international payments. <br/>BILLER means a registered payee for BPAY. <br/>DIGITAL_WALLET means a registered payee for a bank's digital wallet
       */
      type: "BILLER" | "DIGITAL_WALLET" | "DOMESTIC" | "INTERNATIONAL";
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingProductByIdV4 {
  data: {
    /**
     * Object that contains links to additional information on specific topics
     */
    additionalInformation?: {
      /**
       * An array of additional bundles for the product, if applicable. To be treated as secondary documents to the `bundleUri`. Only to be used if there is a primary `bundleUri`.
       */
      additionalBundleUris?:
        | {
            /**
             * The URI describing the additional information
             */
            additionalInfoUri: string;
            /**
             * Display text providing more information about the document URI
             */
            description?: string | null;
            [k: string]: unknown;
          }[]
        | null;
      /**
       * An array of additional eligibility rules and criteria for the product, if applicable. To be treated as secondary documents to the `eligibilityUri`. Only to be used if there is a primary `eligibilityUri`.
       */
      additionalEligibilityUris?:
        | {
            /**
             * The URI describing the additional information
             */
            additionalInfoUri: string;
            /**
             * Display text providing more information about the document URI
             */
            description?: string | null;
            [k: string]: unknown;
          }[]
        | null;
      /**
       * An array of additional fees, pricing, discounts, exemptions and bonuses for the product, if applicable. To be treated as secondary documents to the `feesAndPricingUri`. Only to be used if there is a primary `feesAndPricingUri`.
       */
      additionalFeesAndPricingUris?:
        | {
            /**
             * The URI describing the additional information
             */
            additionalInfoUri: string;
            /**
             * Display text providing more information about the document URI
             */
            description?: string | null;
            [k: string]: unknown;
          }[]
        | null;
      /**
       * An array of additional general overviews for the product or features of the product, if applicable. To be treated as secondary documents to the `overviewUri`. Only to be used if there is a primary `overviewUri`.
       */
      additionalOverviewUris?:
        | {
            /**
             * The URI describing the additional information
             */
            additionalInfoUri: string;
            /**
             * Display text providing more information about the document URI
             */
            description?: string | null;
            [k: string]: unknown;
          }[]
        | null;
      /**
       * An array of additional terms and conditions for the product, if applicable. To be treated as secondary documents to the `termsUri`. Only to be used if there is a primary `termsUri`.
       */
      additionalTermsUris?:
        | {
            /**
             * The URI describing the additional information
             */
            additionalInfoUri: string;
            /**
             * Display text providing more information about the document URI
             */
            description?: string | null;
            [k: string]: unknown;
          }[]
        | null;
      /**
       * Description of a bundle that this product can be part of. Mandatory if `additionalBundleUris` includes one or more supporting documents.
       */
      bundleUri?: string | null;
      /**
       * Eligibility rules and criteria for the product. Mandatory if `additionalEligibilityUris` includes one or more supporting documents.
       */
      eligibilityUri?: string | null;
      /**
       * Description of fees, pricing, discounts, exemptions and bonuses for the product. Mandatory if `additionalFeesAndPricingUris` includes one or more supporting documents.
       */
      feesAndPricingUri?: string | null;
      /**
       * General overview of the product. Mandatory if `additionalOverviewUris` includes one or more supporting documents.
       */
      overviewUri?: string | null;
      /**
       * Terms and conditions for the product. Mandatory if `additionalTermsUris` includes one or more supporting documents.
       */
      termsUri?: string | null;
      [k: string]: unknown;
    };
    /**
     * A link to an application web page where this product can be applied for.
     */
    applicationUri?: string | null;
    /**
     * A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required
     */
    brand: string;
    /**
     * An optional display name of the brand
     */
    brandName?: string | null;
    /**
     * An array of card art images
     */
    cardArt?:
      | {
          /**
           * URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI according to **[[RFC2397]](#nref-RFC2397)**
           */
          imageUri: string;
          /**
           * Display label for the specific image
           */
          title?: string;
          [k: string]: unknown;
        }[]
      | null;
    /**
     * A description of the product
     */
    description: string;
    /**
     * The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate
     */
    effectiveFrom?: string | null;
    /**
     * The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products
     */
    effectiveTo?: string | null;
    /**
     * Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable
     */
    isTailored: boolean;
    /**
     * The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)
     */
    lastUpdated: string;
    /**
     * The display name of the product
     */
    name: string;
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
     * A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
     */
    productId: string;
    [k: string]: unknown;
  } & {
    /**
     * An array of bundles that this product participates in.  Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle.  It is assumed that the current product is included in the bundle also
     */
    bundles?: {
      /**
       * Display text providing more information on the bundle
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on the bundle criteria and benefits
       */
      additionalInfoUri?: string | null;
      /**
       * Description of the bundle
       */
      description: string;
      /**
       * Name of the bundle
       */
      name: string;
      /**
       * Array of product IDs for products included in the bundle that are available via the product end points.  Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference end points
       */
      productIds?: string[] | null;
      [k: string]: unknown;
    }[];
    /**
     * Array of features available for the product
     */
    features?: {
      /**
       * Display text providing more information on the feature. Mandatory if the [feature type](#tocSproductfeaturetypedoc) is set to OTHER
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this feature
       */
      additionalInfoUri?: string | null;
      /**
       * Generic field containing additional information relevant to the [featureType](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.](#tocSproductfeaturetypedoc)
       */
      additionalValue?: string | null;
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
      [k: string]: unknown;
    }[];
    /**
     * Constraints on the application for or operation of the product such as minimum balances or limit thresholds
     */
    constraints?: {
      /**
       * Display text providing more information the constraint
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on the constraint
       */
      additionalInfoUri?: string | null;
      /**
       * Generic field containing additional information relevant to the [constraintType](#tocSproductconstrainttypedoc) specified.  Whether mandatory or not is dependent on the value of [constraintType](#tocSproductconstrainttypedoc)
       */
      additionalValue?: string | null;
      /**
       * The type of constraint described.  See the next section for an overview of valid values and their meaning
       */
      constraintType: "MAX_BALANCE" | "MAX_LIMIT" | "MIN_BALANCE" | "MIN_LIMIT" | "OPENING_BALANCE";
      [k: string]: unknown;
    }[];
    /**
     * Eligibility criteria for the product
     */
    eligibility?: {
      /**
       * Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to OTHER
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this eligibility criteria
       */
      additionalInfoUri?: string | null;
      /**
       * Generic field containing additional information relevant to the [eligibilityType](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [eligibilityType](#tocSproducteligibilitytypedoc)
       */
      additionalValue?: string | null;
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
      [k: string]: unknown;
    }[];
    /**
     * Fees applicable for the product
     */
    fees?: {
      /**
       * The indicative frequency with which the fee is calculated on the account. Only applies if balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      accrualFrequency?: string | null;
      /**
       * A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      accruedRate?: string | null;
      /**
       * Display text providing more information on the fee
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this fee
       */
      additionalInfoUri?: string | null;
      /**
       * Generic field containing additional information relevant to the [feeType](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType](#tocSproductfeetypedoc)
       */
      additionalValue?: string | null;
      /**
       * The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      amount?: string | null;
      /**
       * A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied.
       */
      balanceRate?: string | null;
      /**
       * The currency the fee will be charged in. Assumes AUD if absent
       */
      currency?: string | null;
      /**
       * An optional list of discounts to this fee that may be available
       */
      discounts?:
        | {
            /**
             * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
             */
            accruedRate?: string | null;
            /**
             * Display text providing more information on the discount
             */
            additionalInfo?: string | null;
            /**
             * Link to a web page with more information on this discount
             */
            additionalInfoUri?: string | null;
            /**
             * Generic field containing additional information relevant to the [discountType](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType](#tocSproductdiscounttypedoc)
             */
            additionalValue?: string | null;
            /**
             * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
             */
            amount?: string | null;
            /**
             * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
             */
            balanceRate?: string | null;
            /**
             * Description of the discount
             */
            description: string;
            /**
             * The type of discount. See the next section for an overview of valid values and their meaning
             */
            discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
            /**
             * Eligibility constraints that apply to this discount. Mandatory if ``discountType`` is ``ELIGIBILITY_ONLY``.
             */
            eligibility?:
              | {
                  /**
                   * Display text providing more information on this eligibility constraint. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
                   */
                  additionalInfo?: string | null;
                  /**
                   * Link to a web page with more information on this eligibility constraint
                   */
                  additionalInfoUri?: string | null;
                  /**
                   * Generic field containing additional information relevant to the [discountEligibilityType](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [discountEligibilityType](#tocSproductdiscounteligibilitydoc)
                   */
                  additionalValue?: string | null;
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
                  [k: string]: unknown;
                }[]
              | null;
            /**
             * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee
             */
            feeRate?: string | null;
            /**
             * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory
             */
            transactionRate?: string | null;
            [k: string]: unknown;
          }[]
        | null;
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
       * Name of the fee
       */
      name: string;
      /**
       * A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the *feeType* "VARIABLE" is supplied
       */
      transactionRate?: string | null;
      [k: string]: unknown;
    }[];
    /**
     * Interest rates available for deposits
     */
    depositRates?: {
      /**
       * Display text providing more information on the rate
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this rate
       */
      additionalInfoUri?: string | null;
      /**
       * Generic field containing additional information relevant to the [depositRateType](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType](#tocSproductdepositratetypedoc)
       */
      additionalValue?: string | null;
      /**
       * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      applicationFrequency?: string | null;
      /**
       * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      calculationFrequency?: string | null;
      /**
       * The type of rate (base, bonus, etc). See the next section for an overview of valid values and their meaning
       */
      depositRateType: "BONUS" | "BUNDLE_BONUS" | "FIXED" | "FLOATING" | "INTRODUCTORY" | "MARKET_LINKED" | "VARIABLE";
      /**
       * The rate to be applied
       */
      rate: string;
      /**
       * Rate tiers applicable for this rate
       */
      tiers?:
        | {
            /**
             * Display text providing more information on the rate tier.
             */
            additionalInfo?: string | null;
            /**
             * Link to a web page with more information on this rate tier
             */
            additionalInfoUri?: string | null;
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
             * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
             */
            maximumValue?: number | null;
            /**
             * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
             */
            minimumValue: number;
            /**
             * A display name for the tier
             */
            name: string;
            /**
             * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
             */
            rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
            /**
             * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
             */
            unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
            [k: string]: unknown;
          }[]
        | null;
      [k: string]: unknown;
    }[];
    /**
     * Interest rates charged against lending balances
     */
    lendingRates?: {
      /**
       * Display text providing more information on the rate.
       */
      additionalInfo?: string | null;
      /**
       * Link to a web page with more information on this rate
       */
      additionalInfoUri?: string | null;
      /**
       * Generic field containing additional information relevant to the [lendingRateType](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType](#tocSproductlendingratetypedoc)
       */
      additionalValue?: string | null;
      /**
       * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      applicationFrequency?: string | null;
      /**
       * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      calculationFrequency?: string | null;
      /**
       * A comparison rate equivalent for this rate
       */
      comparisonRate?: string | null;
      /**
       * When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered
       */
      interestPaymentDue?: ("IN_ADVANCE" | "IN_ARREARS") | null;
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
       * The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes
       */
      loanPurpose?: ("INVESTMENT" | "OWNER_OCCUPIED") | null;
      /**
       * The rate to be applied
       */
      rate: string;
      /**
       * Options in place for repayments. If absent, the lending rate is applicable to all repayment types
       */
      repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
      /**
       * Rate tiers applicable for this rate
       */
      tiers?:
        | {
            /**
             * Display text providing more information on the rate tier.
             */
            additionalInfo?: string | null;
            /**
             * Link to a web page with more information on this rate tier
             */
            additionalInfoUri?: string | null;
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
             * The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
             */
            maximumValue?: number | null;
            /**
             * The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value
             */
            minimumValue: number;
            /**
             * A display name for the tier
             */
            name: string;
            /**
             * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps')
             */
            rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
            /**
             * The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of **MONTH**'s or **DAY**'s (in the case of term deposit tiers)
             */
            unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
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
    [k: string]: unknown;
  };
  meta?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingProductListV2 {
  data: {
    /**
     * The list of products returned.  If the filter results in an empty set then this array may have no records
     */
    products: {
      /**
       * Object that contains links to additional information on specific topics
       */
      additionalInformation?: {
        /**
         * An array of additional bundles for the product, if applicable. To be treated as secondary documents to the `bundleUri`. Only to be used if there is a primary `bundleUri`.
         */
        additionalBundleUris?:
          | {
              /**
               * The URI describing the additional information
               */
              additionalInfoUri: string;
              /**
               * Display text providing more information about the document URI
               */
              description?: string | null;
              [k: string]: unknown;
            }[]
          | null;
        /**
         * An array of additional eligibility rules and criteria for the product, if applicable. To be treated as secondary documents to the `eligibilityUri`. Only to be used if there is a primary `eligibilityUri`.
         */
        additionalEligibilityUris?:
          | {
              /**
               * The URI describing the additional information
               */
              additionalInfoUri: string;
              /**
               * Display text providing more information about the document URI
               */
              description?: string | null;
              [k: string]: unknown;
            }[]
          | null;
        /**
         * An array of additional fees, pricing, discounts, exemptions and bonuses for the product, if applicable. To be treated as secondary documents to the `feesAndPricingUri`. Only to be used if there is a primary `feesAndPricingUri`.
         */
        additionalFeesAndPricingUris?:
          | {
              /**
               * The URI describing the additional information
               */
              additionalInfoUri: string;
              /**
               * Display text providing more information about the document URI
               */
              description?: string | null;
              [k: string]: unknown;
            }[]
          | null;
        /**
         * An array of additional general overviews for the product or features of the product, if applicable. To be treated as secondary documents to the `overviewUri`. Only to be used if there is a primary `overviewUri`.
         */
        additionalOverviewUris?:
          | {
              /**
               * The URI describing the additional information
               */
              additionalInfoUri: string;
              /**
               * Display text providing more information about the document URI
               */
              description?: string | null;
              [k: string]: unknown;
            }[]
          | null;
        /**
         * An array of additional terms and conditions for the product, if applicable. To be treated as secondary documents to the `termsUri`. Only to be used if there is a primary `termsUri`.
         */
        additionalTermsUris?:
          | {
              /**
               * The URI describing the additional information
               */
              additionalInfoUri: string;
              /**
               * Display text providing more information about the document URI
               */
              description?: string | null;
              [k: string]: unknown;
            }[]
          | null;
        /**
         * Description of a bundle that this product can be part of. Mandatory if `additionalBundleUris` includes one or more supporting documents.
         */
        bundleUri?: string | null;
        /**
         * Eligibility rules and criteria for the product. Mandatory if `additionalEligibilityUris` includes one or more supporting documents.
         */
        eligibilityUri?: string | null;
        /**
         * Description of fees, pricing, discounts, exemptions and bonuses for the product. Mandatory if `additionalFeesAndPricingUris` includes one or more supporting documents.
         */
        feesAndPricingUri?: string | null;
        /**
         * General overview of the product. Mandatory if `additionalOverviewUris` includes one or more supporting documents.
         */
        overviewUri?: string | null;
        /**
         * Terms and conditions for the product. Mandatory if `additionalTermsUris` includes one or more supporting documents.
         */
        termsUri?: string | null;
        [k: string]: unknown;
      };
      /**
       * A link to an application web page where this product can be applied for.
       */
      applicationUri?: string | null;
      /**
       * A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required
       */
      brand: string;
      /**
       * An optional display name of the brand
       */
      brandName?: string | null;
      /**
       * An array of card art images
       */
      cardArt?:
        | {
            /**
             * URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI according to **[[RFC2397]](#nref-RFC2397)**
             */
            imageUri: string;
            /**
             * Display label for the specific image
             */
            title?: string;
            [k: string]: unknown;
          }[]
        | null;
      /**
       * A description of the product
       */
      description: string;
      /**
       * The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate
       */
      effectiveFrom?: string | null;
      /**
       * The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products
       */
      effectiveTo?: string | null;
      /**
       * Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable
       */
      isTailored: boolean;
      /**
       * The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)
       */
      lastUpdated: string;
      /**
       * The display name of the product
       */
      name: string;
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
       * A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
       */
      productId: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingScheduledPaymentsList {
  data: {
    /**
     * The list of scheduled payments to return
     */
    scheduledPayments: {
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
      /**
       * The short display name of the scheduled payment as provided by the customer if provided. Where a customer has not provided a nickname, a display name derived by the bank for the scheduled payment should be provided that is consistent with existing digital banking channels
       */
      nickname?: string | null;
      /**
       * The reference for the transaction, if applicable, that will be provided by the originating institution for all payments in the payment set. Empty string if no data provided
       */
      payeeReference?: string | null;
      /**
       * The reference for the transaction that will be used by the originating institution for the purposes of constructing a statement narrative on the payer’s account. Empty string if no data provided
       */
      payerReference: string;
      paymentSet: {
        /**
         * The amount of the next payment if known. Mandatory unless the isAmountCalculated field is set to true. Must be zero or positive if present
         */
        amount?: string | null;
        /**
         * The currency for the payment. AUD assumed if not present
         */
        currency?: string | null;
        /**
         * Flag indicating whether the amount of the payment is calculated based on the context of the event. For instance a payment to reduce the balance of a credit card to zero. If absent then false is assumed
         */
        isAmountCalculated?: boolean | null;
        /**
         * Object containing details of the destination of the payment. Used to specify a variety of payment destination types
         */
        to: {
          /**
           * Present if toUType is set to accountId. Indicates that the payment is to another account that is accessible under the current consent
           */
          accountId?: string | null;
          biller?: {
            /**
             * BPAY Biller Code of the Biller
             */
            billerCode: string;
            /**
             * Name of the Biller
             */
            billerName: string;
            /**
             * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
             */
            crn?: string | null;
            [k: string]: unknown;
          };
          domestic?: {
            account?: {
              /**
               * Name of the account to pay to
               */
              accountName?: string | null;
              /**
               * Number of the account to pay to
               */
              accountNumber: string;
              /**
               * BSB of the account to pay to
               */
              bsb: string;
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
               * The identifier of the PayID (dependent on type)
               */
              identifier: string;
              /**
               * The name assigned to the PayID by the owner of the PayID
               */
              name?: string | null;
              /**
               * The type of the PayID
               */
              type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
              [k: string]: unknown;
            };
            /**
             * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
             */
            payeeAccountUType: "account" | "card" | "payId";
            [k: string]: unknown;
          };
          international?: {
            bankDetails: {
              /**
               * Account Targeted for payment
               */
              accountNumber: string;
              bankAddress?: {
                /**
                 * Address of the recipient Bank
                 */
                address: string;
                /**
                 * Name of the recipient Bank
                 */
                name: string;
                [k: string]: unknown;
              } | null;
              /**
               * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
               */
              beneficiaryBankBIC?: string | null;
              /**
               * Number for the Clearing House Interbank Payments System
               */
              chipNumber?: string | null;
              /**
               * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
               */
              country: string;
              /**
               * Number for Fedwire payment (Federal Reserve Wire Network)
               */
              fedWireNumber?: string | null;
              /**
               * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
               */
              legalEntityIdentifier?: string | null;
              /**
               * International bank routing number
               */
              routingNumber?: string | null;
              /**
               * Sort code used for account identification in some jurisdictions
               */
              sortCode?: string | null;
              [k: string]: unknown;
            };
            beneficiaryDetails: {
              /**
               * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
               */
              country: string;
              /**
               * Response message for the payment
               */
              message?: string | null;
              /**
               * Name of the beneficiary
               */
              name?: string | null;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          /**
           * The short display name of the payee as provided by the customer unless toUType is set to payeeId. Where a customer has not provided a nickname, a display name derived by the bank for payee should be provided that is consistent with existing digital banking channels
           */
          nickname?: string | null;
          /**
           * Present if toUType is set to payeeId. Indicates that the payment is to registered payee that can be accessed using the payee end point. If the Bank Payees scope has not been consented to then a payeeId should not be provided and the full payee details should be provided instead
           */
          payeeId?: string | null;
          /**
           * The reference for the transaction, if applicable, that will be provided by the originating institution for the specific payment. If not empty, it overrides the value provided at the BankingScheduledPayment level.
           */
          payeeReference?: string | null;
          /**
           * The type of object provided that specifies the destination of the funds for the payment.
           */
          toUType: "accountId" | "biller" | "domestic" | "international" | "payeeId";
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      /**
       * Object containing the detail of the schedule for the payment
       */
      recurrence: {
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
        /**
         * Indicates that the schedule of payments is defined by a series of intervals. Mandatory if recurrenceUType is set to intervalSchedule
         */
        intervalSchedule?: {
          /**
           * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
           */
          finalPaymentDate?: string | null;
          /**
           * An array of interval objects defining the payment schedule.  Each entry in the array is additive, in that it adds payments to the overall payment schedule.  If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry
           */
          intervals: {
            /**
             * Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is P1D. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.
             */
            dayInInterval?: string | null;
            /**
             * An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)  (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
             */
            interval: string;
            [k: string]: unknown;
          }[];
          /**
           * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
           */
          nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
          /**
           * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely
           */
          paymentsRemaining?: number | null;
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
          /**
           * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
           */
          paymentsRemaining?: number | null;
          [k: string]: unknown;
        };
        /**
         * The date of the next payment under the recurrence schedule
         */
        nextPaymentDate?: string | null;
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
         * The type of recurrence used to define the schedule
         */
        recurrenceUType: "eventBased" | "intervalSchedule" | "lastWeekDay" | "onceOff";
        [k: string]: unknown;
      };
      /**
       * A unique ID of the scheduled payment adhering to the standards for ID permanence
       */
      scheduledPaymentId: string;
      /**
       * Indicates whether the schedule is currently active. The value SKIP is equivalent to ACTIVE except that the customer has requested the next normal occurrence to be skipped.
       */
      status: "ACTIVE" | "INACTIVE" | "SKIP";
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingTransactionById {
  data: {
    /**
     * ID of the account for which transactions are provided
     */
    accountId: string;
    /**
     * The value of the transaction. Negative values mean money was outgoing from the account
     */
    amount: string;
    /**
     * 6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.
     */
    apcaNumber?: string | null;
    /**
     * BPAY Biller Code for the transaction (if available)
     */
    billerCode?: string | null;
    /**
     * Name of the BPAY biller for the transaction (if available)
     */
    billerName?: string | null;
    /**
     * BPAY CRN for the transaction (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
     */
    crn?: string | null;
    /**
     * The currency for the transaction amount. AUD assumed if not present
     */
    currency?: string | null;
    /**
     * The transaction description as applied by the financial institution
     */
    description: string;
    /**
     * The time the transaction was executed by the originating customer, if available
     */
    executionDateTime?: string | null;
    /**
     * True if extended information is available using the transaction detail end point. False if extended data is not available
     */
    isDetailAvailable: boolean;
    /**
     * The merchant category code (or MCC) for an outgoing payment to a merchant
     */
    merchantCategoryCode?: string | null;
    /**
     * Name of the merchant for an outgoing payment to a merchant
     */
    merchantName?: string | null;
    /**
     * The time the transaction was posted. This field is Mandatory if the transaction has status POSTED.  This is the time that appears on a standard statement
     */
    postingDateTime?: string | null;
    /**
     * The reference for the transaction provided by the originating institution. Empty string if no data provided
     */
    reference: string;
    /**
     * Status of the transaction whether pending or posted. Note that there is currently no provision in the standards to guarantee the ability to correlate a pending transaction with an associated posted transaction
     */
    status: "PENDING" | "POSTED";
    /**
     * A unique ID of the transaction adhering to the standards for ID permanence.  This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type. It is mandatory if `isDetailAvailable` is set to true.
     */
    transactionId?: string | null;
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
     * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry
     */
    valueDateTime?: string | null;
    [k: string]: unknown;
  } & {
    extendedData: {
      /**
       * Label of the originating payer. Mandatory for inbound payment
       */
      payer?: string;
      /**
       * Label of the target PayID.  Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID)
       */
      payee?: string;
      /**
       * Optional extended data provided specific to transaction originated via NPP
       */
      extensionUType?: "x2p101Payload";
      x2p101Payload?: {
        /**
         * An extended string description. Only present if specified by the extensionUType field
         */
        extendedDescription: string;
        /**
         * An end to end ID for the payment created at initiation
         */
        endToEndId?: string;
        /**
         * Purpose of the payment.  Format is defined by NPP standards for the x2p1.01 overlay service
         */
        purposeCode?: string;
        [k: string]: unknown;
      };
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
    [k: string]: unknown;
  };
  meta?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingTransactionList {
  data: {
    transactions: {
      /**
       * ID of the account for which transactions are provided
       */
      accountId: string;
      /**
       * The value of the transaction. Negative values mean money was outgoing from the account
       */
      amount: string;
      /**
       * 6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.
       */
      apcaNumber?: string | null;
      /**
       * BPAY Biller Code for the transaction (if available)
       */
      billerCode?: string | null;
      /**
       * Name of the BPAY biller for the transaction (if available)
       */
      billerName?: string | null;
      /**
       * BPAY CRN for the transaction (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
       */
      crn?: string | null;
      /**
       * The currency for the transaction amount. AUD assumed if not present
       */
      currency?: string | null;
      /**
       * The transaction description as applied by the financial institution
       */
      description: string;
      /**
       * The time the transaction was executed by the originating customer, if available
       */
      executionDateTime?: string | null;
      /**
       * True if extended information is available using the transaction detail end point. False if extended data is not available
       */
      isDetailAvailable: boolean;
      /**
       * The merchant category code (or MCC) for an outgoing payment to a merchant
       */
      merchantCategoryCode?: string | null;
      /**
       * Name of the merchant for an outgoing payment to a merchant
       */
      merchantName?: string | null;
      /**
       * The time the transaction was posted. This field is Mandatory if the transaction has status POSTED.  This is the time that appears on a standard statement
       */
      postingDateTime?: string | null;
      /**
       * The reference for the transaction provided by the originating institution. Empty string if no data provided
       */
      reference: string;
      /**
       * Status of the transaction whether pending or posted. Note that there is currently no provision in the standards to guarantee the ability to correlate a pending transaction with an associated posted transaction
       */
      status: "PENDING" | "POSTED";
      /**
       * A unique ID of the transaction adhering to the standards for ID permanence.  This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type. It is mandatory if `isDetailAvailable` is set to true.
       */
      transactionId?: string | null;
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
       * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry
       */
      valueDateTime?: string | null;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseErrorListV2 {
  errors: {
    /**
     * The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.
     */
    code: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     */
    detail: string;
    /**
     * Additional data for customised error codes
     */
    meta?: {
      /**
       * The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.
       */
      urn?: string | null;
      [k: string]: unknown;
    };
    /**
     * A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.
     */
    title: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
