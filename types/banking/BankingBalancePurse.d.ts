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
