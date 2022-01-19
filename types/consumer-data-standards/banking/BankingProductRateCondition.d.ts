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
