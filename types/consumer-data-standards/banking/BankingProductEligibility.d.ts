/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
