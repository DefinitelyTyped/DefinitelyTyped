/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
