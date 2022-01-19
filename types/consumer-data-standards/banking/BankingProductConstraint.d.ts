/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
