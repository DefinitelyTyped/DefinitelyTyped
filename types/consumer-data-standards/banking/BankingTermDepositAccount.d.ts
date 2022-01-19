/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
