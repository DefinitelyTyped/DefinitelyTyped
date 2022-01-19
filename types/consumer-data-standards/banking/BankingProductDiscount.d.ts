/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
