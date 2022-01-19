/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
