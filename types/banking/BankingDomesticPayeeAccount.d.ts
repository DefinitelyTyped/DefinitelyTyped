/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayeeAccount {
  /**
   * Name of the account to pay to
   */
  accountName?: string | null;
  /**
   * BSB of the account to pay to
   */
  bsb: string;
  /**
   * Number of the account to pay to
   */
  accountNumber: string;
  [k: string]: unknown;
}
