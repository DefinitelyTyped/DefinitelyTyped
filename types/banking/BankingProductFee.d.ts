/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
