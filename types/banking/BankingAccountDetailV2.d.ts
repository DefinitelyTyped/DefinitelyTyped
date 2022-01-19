/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
